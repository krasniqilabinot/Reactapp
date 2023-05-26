import React from 'react'
import "../components/Assets/css/product.css"
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
function Product({ product }) {
  const [isFavorite, setIsFavorite] = useState(false)
  let [products, setProducts] = useState([])
  let storage = null 
 
  useEffect(() => {
    getStorage()
  },[])
  
 
  
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
   const getStorage = () => {
    storage = localStorage.getItem('products_favorites')
    setProducts(JSON.parse(storage))
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
    <div className="card card-disa">
       
      <img src={product.image} className="card-img-top p-2" alt="..." />
      <div className="card-body">
        <div>
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
        </div>
        <strong className='bold'>{product.price} €</strong>
        <div>
       
          <Link to={`/product/${product.id}`} className="info">More Details</Link>
          <i className='fa fa-shopping-cart info' onClick={addToCart} />
          <i className='fa fa-heart info' style={{ color: isFavorite ? 'red' : 'black' }} onClick={addToFavorites} />
          
        </div>
      </div>
    </div>
  )
}

export default Product 