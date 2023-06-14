import React, { useEffect, useState,useParams,storage } from 'react'
import { ProductsContext } from '../ProductsContext'
import axios from 'axios'
function Favs() {
  let [products, setProducts] = useState([])
  let storage = null 

  useEffect(() => {
    getStorage()
  },[])
  
  const getStorage = () => {
    storage = localStorage.getItem('products_favorites')
    setProducts(JSON.parse(storage))
  }

  const addToFavorites = () => {
    const favorites = localStorage.getItem('products_favorites')
    const my_products = JSON.parse(favorites)
  }
  const removeFromCard = (e) => {
    const prodId = e.target.getAttribute('prod-id')
    const index = products.findIndex(elem => elem.id == prodId)
    products.splice(index,1)
    localStorage.setItem('products_favorites',JSON.stringify(products))
    getStorage()
   
  }
  return (
    <>
     { products && products.length ===0 ?(
       <section className='info-Cart'>
       <h2>There is no product in the favorite!</h2>
     </section>
     ): ""}
   
    <div><ul className='ul-items'>
      {products && products.map((prod, index) => (
        <li key={index} className="py-2">
          <div >
            <img src={prod.image} height={'30px'} />
            {prod.title}
          </div>
          <div className='buttons'>
            <button  type="button" className="btn btn-danger" prod-id={prod.id} onClick={removeFromCard}>Remove</button>
          
          </div>

        </li>
  
      ))}

    </ul></div>
    
    </>
  )
}

export default Favs