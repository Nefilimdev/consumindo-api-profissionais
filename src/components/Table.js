import React from 'react'

export default class Table extends React.Component {
    render(){
        return(
        <div>
            <h1>Tabela profissionais</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Github</th>
                    </tr>                    
                </thead>
                
                <tbody>
                    {this.props.dados.map((cadaProfissionail)=>{ // pegando dados recebidos de App e deixando dinâmico
                        return (
                            <tr key={cadaProfissionail.id}>
                                <td>{cadaProfissionail.name}</td>  {/* aqui tem que ser o nome que está no banco de dados */}
                                <td><a href={cadaProfissionail.github}>{cadaProfissionail.github}</a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        )
    }
}