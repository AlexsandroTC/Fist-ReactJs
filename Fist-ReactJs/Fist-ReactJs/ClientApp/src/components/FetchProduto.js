import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class FetchProduto extends Component {
    static displayName = "Produtos";

    constructor() {
        super();
        this.state = { produtos: [], loading: true };
    }

    componentDidMount() {
        this.getProdutoData();
    }

    static handleEdit(id) {
        window.location.href = "/produto/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Deseja excluir o produto: " + id)) return;

        fetch('api/produtos/' + id, { method: 'delete' })
            .then(json => {
                window.location.href = "fetch-produto";
                alert("Produto deletado com sucesso.");
            });
    }

    static renderProdutos() {
        return (
            <table className='table table-striped' aria-labelledby="produtosTableLabel">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        produtos.map(prod =>
                            <tr key={prod.id}>
                                <td> {prod.id} </td>
                                <td> {prod.descricao} </td>
                                <td> <button className='btn btn-sucess' onClick={(id) => this.handleEdit(prod.id)} >Editar</button></td> &nbsp;
                                <td> <button className='btn btn-danger' onClick={(id) => this.handleDelete(prod.id)} >Deletar</button> </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading ? <p><em> Carregando... </em> </p>
            : FetchProduto.renderProdutos(this.state.produtos);

        return (
            <div>
                <h1 id="produtosTableLabel">Produtos</h1>
                <p>Tela de listagem de produtos.</p>
                <p>
                    <Link to ="/add-produto">Novo Produto</Link>
                </p>

                {contents}
            </div>
        );
    }



    async getProdutoData() {
        const response = await fetch('api/Produtos');
        const data = await response.json();

        this.setState({ produtos: data, loading: false });
    }
}