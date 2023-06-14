import React, { useContext } from 'react'
import { ProductsContext } from '../ProductsContext'
import Product from '../components/Product'

function Home() {
    let products = useContext(ProductsContext)
    products = products.slice(0, 4)
    console.log(products)
    return (
        <>
            <section>
                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg" className="d-block w-100 h-50" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://blog.hubspot.com/hs-fs/hubfs/ecommerce-10.jpg?width=595&height=400&name=ecommerce-10.jpg" className="d-block w-100 h-50" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.searchenginejournal.com/wp-content/uploads/2020/12/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png" className="d-block w-100 h-50" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section className='produkt'>
                <div className='container py-5'>
                    <h1 className='mb-3 text-center'>Latest produks</h1>
                    <div className='row'>
                        {products && products.map(prod => (
                            <div key={prod.id} className="col-3 my-2">
                                <Product product={prod} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='intro py-5  bg-light'>
                <div className='container'>
                    <div className='row'>
                            <div className='col-8'>
                                <h1 className='mb-4 '> Lorem Ipsum</h1>
                                <p className='mb-4 pe-5'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p className='pe-4'>
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <div className='col-4'>
                                <img src='https://www.shutterstock.com/image-photo/businesswoman-phone-laptop-using-online-260nw-1908264283.jpg'></img>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home