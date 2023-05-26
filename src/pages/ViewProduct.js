import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../ProductsContext'
import axios from 'axios'
import Home from './Shop'
import "../components/Assets/css/ViewProduct.css"
import { Link } from 'react-router-dom'
function ViewProduct() {
  const { id } = useParams()

  const [product, setProduct] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)
  useEffect(() => {
    console.log('useeffect')
    axios.get(`https://fakestoreapi.com/products/${id}`)

      .then(resp => {
        setProduct(resp.data)
        checkIfItIsFavorite()
      })
      .catch(e => console.log(e))
  }, [])

  const addToCart = () => {
    const products_cart = localStorage.getItem('products_cart')
    const my_products = JSON.parse(products_cart)

    if (products_cart && my_products) {
      const index_exist = my_products.findIndex((item) => item.id === product.id)
      if (index_exist > -1) {
        my_products[index_exist].quantity += 1
      } else {
        my_products.push({ ...product, quantity: 1 })
      }
      console.log({ my_products });
      localStorage.setItem('products_cart', JSON.stringify(my_products))
    }
    else {
      localStorage.setItem('products_cart', JSON.stringify([my_products]))
    }
  }

  function checkIfItIsFavorite() {
    const favorites = localStorage.getItem('products_favorites')
    const my_products = JSON.parse(favorites)
    console.log(favorites, my_products.findIndex((item) => item.id === product.id))

    if (favorites && my_products.findIndex((item) => item.id === product.id) > -1) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }
  }

  const addToFavorites = () => {
    const favorites = localStorage.getItem('products_favorites')
    const my_products = JSON.parse(favorites)

    if (favorites) {
      const index_exist = my_products.findIndex((item) => item.id === product.id)
      if (index_exist > -1) {
        my_products.splice(index_exist, 1)
      } else {
        my_products.push(product)
      }
      console.log({ my_products });
      localStorage.setItem('products_favorites', JSON.stringify(my_products))
    }
    else {
      localStorage.setItem('products_favorites', JSON.stringify([product]))
    }
    checkIfItIsFavorite()
  }




  return (
    <section className='viwe-prod py-5'>
      <div className="card-img">
        <img src={product.image} className="card-img-top p-2" alt="..." />
      </div>
      <div className="card-body">
        <div>
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <strong >{product.category} </strong>
        <strong >{product.price} €</strong>
        </div>
     
        <div className='viwe-price'>
          <i className='fa fa-shopping-cart info' onClick={addToCart} />
          <i className='fa fa-heart info' style={{ color: isFavorite ? 'red' : 'black' }} onClick={addToFavorites} />
          <Link to={`../Shop`} className="info">Go to Shop</Link>
        </div>
       
      </div>

    </section>

  )
}
export default ViewProduct