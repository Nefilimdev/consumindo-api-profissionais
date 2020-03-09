import React from 'react'
import Table from './Table'

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            profissionais: []
        }
    }

    //Consumindo API de profissionais 
    componentDidMount(){
        let config = { method: 'get'}
        fetch('http://localhost:8000/api/profissionais', config)  //caminho fornecido na routes>api do projeto Laravel
            .then((resposta) => {
                // console.log('Resposta: ', resposta.json())
                return resposta.json()
            })
            .then((json) => { // aqui tem que usar com arrow function obrigatoriamente por conta do escopo do 'this'
                this.setState({ //setando novo estado com dados que forem obtidos pelo consumo da API
                    ...this.state, 
                    profissionais: json 
                })
                console.log('JSON: ', json)
            })
            .catch((error) => console.log('Erro: ', error))
    }

    render() {
        return (
            <Table dados={this.state.profissionais}/> //mandando dados para a tabela. 'Dados' é um nome que eu escolho para trabalhar no componente Table
        )
    }
}