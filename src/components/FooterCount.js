import React from 'react'
import './Assets/css/Footer.css'
function FooterCount() {
    return (
        <>
            <footer className="footer-bcol text-center text-white">
                <div className="container pt-4">
                    <section className="mb-4">
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"

                        ><i className="fa fa-facebook-f"></i ></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"

                        ><i className="fa fa-twitter"></i ></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1">
                            <i className="fa fa-google"></i ></a>


                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                        ><i className="fa fa-instagram"></i></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                        ><i className="fa fa-linkedin"></i></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                        ><i className="fa fa-github"></i></a>
                    </section>

                </div>

                <div className="bgcol text-center text-dark p-3" >
                    © 2023 Copyright: 
                    <a className="text-dark" href="#"> Ecommerce </a>
                </div>
            </footer>
        </>
    )
}
export default FooterCount