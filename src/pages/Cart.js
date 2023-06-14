import React, { useEffect, useState } from 'react'
import "../components/Assets/css/Cart.css"
function Cart() {
  let [products, setProducts] = useState([])
  let storage = null

  useEffect(() => {
    getStorage()
  }, [])

  const getStorage = () => {
    storage = localStorage.getItem('products_cart')
    setProducts(JSON.parse(storage))
  }

  const addMore = (e) => {
    const prodId = e.target.getAttribute('prod-id')
    const index = products.findIndex(elem => elem.id == prodId)

    if (index !== -1) {
      products[index].quantity += 1
      localStorage.setItem('products_cart', JSON.stringify(products))
      getStorage()
    }
  }

  const substractMore = (e) => {
    const prodId = e.target.getAttribute('prod-id')
    const index = products.findIndex(elem => elem.id == prodId)

    if (index !== -1) {
      products[index].quantity -= 1
      localStorage.setItem('products_cart', JSON.stringify(products))
      getStorage()
    }

  }

  const removeFromCard = (e) => {
    const prodId = e.target.getAttribute('prod-id')
    const index = products.findIndex(elem => elem.id == prodId)
    products.splice(index, 1)
    localStorage.setItem('products_cart', JSON.stringify(products))
    getStorage()
  }
  const storeOrder=(order) =>{
    const orders_ls=localStorage.getItem('orders')
    if(orders_ls !==null){
      const orders=JSON.parse(orders_ls)
      if(orders.length > 0){
        localStorage.setItem('orders',JSON.stringify([...orders, order]))
      }
    }
  }
  const handleCheckout = (e) => {
    console.log(Array.from(e.target));
    e.preventDefault()
    const form_fields = Array.from(e.target)
    let user = {}
    for (let product of form_fields) {
      console.log({product})
      if (product.type == 'email') {
        alert('this is email')
      }
      if(product.value.length >0){
        user[product.name]=product.value
      }
    }
  }
  return (
    <>
      {products && products.length === 0 ? (
        <section className='info-Cart'>
          <h2>There is no product in the cart!</h2>
        </section>
      ) : ""}
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
              <button type="button" className="btn btn-danger" prod-id={prod.id} onClick={removeFromCard}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className='container'>
        {products && <form className='mt-5' onSubmit={handleCheckout} >
          <input type='text' name='fullname' placeholder='Endte your fullname' className='form-control mb-2' required></input>
          <input type='email' name='email' placeholder='Endte your email addres' className='form-control mb-2' required></input>
          <textarea name='notes' placeholder='Notes...'className='form-control mb-2' ></textarea>
          <button className='btn btn-outline-primary'>Checkout</button>
        </form>}
        </div>
      </div>
    </>
  )
} 

export default Cart