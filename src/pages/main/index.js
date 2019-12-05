import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

export default class Main extends Component {
    // state variable is very useful to update values
    // in execution time, while the application runs
    state = {
        products: [],
        productInfo: {},
        page: 1
    }
    
    // função executada logo no 'inicio'
    componentDidMount() {
        this.loadProducts()
    }

    // usando => function para não sobrescrever 'this' values
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`)
        // console.log(response) mostra o Object recebido

        const { docs, ...productInfo } = response.data
        // criação das variaveis docs e productInfo

        // method to set state changes
        this.setState({ products: docs, productInfo, page })
        // salva os valores para state
        
    }

    prevPage = () => {
        const { page } = this.state
        // reduce code (bringing this. to the context)

        if (page === 1) return

        const pageNumber = page - 1

        this.loadProducts(pageNumber)
    }

    nextPage = () => {
        const { page, productInfo } = this.state
        // reduce code (bringing this. to the context)

        if (page === productInfo.pages) return

        const pageNumber = page + 1

        this.loadProducts(pageNumber)
    }

    render() {
        const { products, page, productInfo }= this.state
        // can use {} to refer many properties

        const prevPage = this.prevPage
        const nextPage = this.nextPage
        // reduce code

        return (
            <div className='product-list'>
                {products.map( product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className='actions'>
                    <button disabled={page === 1} onClick={prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
}
