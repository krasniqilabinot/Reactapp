import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import '../components/Assets/css/shop.css'
function Shop() {
  const [allProducts, setProducts] = useState([])
  const [shownProducts, setShownProducts] = useState([])
  let [pageNumber, setPageNumber] = useState(1)
  const pageSize = 8

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    axios.get('https://fakestoreapi.com/products')
      .then(resp => {
        setProducts(resp.data)
        setShownProductsFunction(resp.data)
      })
      .catch(e => console.log(e))
  }

  const addPageNumber = () => {
    setPageNumber(pageNumber += 1)
    setShownProductsFunction()
  }
  
  const substractPageNumber = () => {
    setPageNumber(pageNumber -= 1)
    setShownProductsFunction()
  }

  function setShownProductsFunction(allData) {
    const data = allData || allProducts
    setShownProducts(data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize))
  }

  return (
    <section className='produkt'>
      <div className='container py-5'>
        <div className='pagination'>
          <i className='fa fa-angle-left' onClick={substractPageNumber} />
          <i className='fa fa-angle-right' onClick={addPageNumber}/>
        </div>
        <div className='row'>
          {shownProducts && shownProducts.map(prod => (
            <div key={prod.id} className="col-3 my-2">
              <Product product={prod} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop