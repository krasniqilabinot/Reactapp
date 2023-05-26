import React, { useEffect, useState } from 'react'
import "../components/Assets/css/Cart.css"
function Cart() {
  let [products, setProducts] = useState([])
  let storage = null 

  useEffect(() => {
    getStorage()
  },[])
  
  const getStorage = () => {
    storage = localStorage.getItem('products_cart')
    setProducts(JSON.parse(storage))
  }

  const addMore = (e) => {
    const prodId = e.target.getAttribute('prod-id')
    const index = products.findIndex(elem => elem.id == prodId)
  
    if(index !== -1) {
      products[index].quantity += 1
      localStorage.setItem('products_cart',JSON.stringify(products))
      getStorage()
    }
  }

  const substractMore = (e) => {
    const prodId = e.target.getAttribute('prod-id')
    const index = products.findIndex(elem => elem.id == prodId)
  
    if(index !== -1) {
      products[index].quantity -= 1
      localStorage.setItem('products_cart',JSON.stringify(products))
      getStorage()
    }
  
  }

  const removeFromCard = (e) => {
    const prodId = e.target.getAttribute('prod-id')
    const index = products.findIndex(elem => elem.id == prodId)
    products.splice(index,1)
    localStorage.setItem('products_cart',JSON.stringify(products))
    getStorage()
   
  }
  return (
    <>
    <section className='info-Cart'>
      <h2>There is no product in the cart!</h2>
    </section>
    <div><ul className='ul-items'>
      {products && products.map((prod, index) => (
        <li key={index} className="py-2">
          <div >
            <img src={prod.image} height={'30px'} />
            {prod.title}
          </div>
          <div className='buttons'>
            <div className='stepper'>
              <i className="fa fa-angle-up" prod-id={prod.id} onClick={addMore}></i>
              <input readOnly value={prod.quantity} />
              <i className="fa fa-angle-down" prod-id={prod.id} onClick={substractMore}></i>
            </div>
            <button  type="button" className="btn btn-danger" prod-id={prod.id} onClick={removeFromCard}>Remove</button>
          
          </div>

        </li>
  
      ))}

    </ul></div>
    
    </>
  )
}

export default Cart