import React from 'react'
import {Link} from 'react-router-dom'

const Banner = () => {
    return (
        <section className="home" id="home">
            <div className="home__container bg-grid">
                <div className="home__sneaker">
                    <div className="home__shape"></div>
                    <img src="./images/imghome.png" alt="" className="home__img"/>
                </div>

                <div className="home__data">
                    <span className="home__new">New in</span>
                    <h1 className="home__title">YEEZY BOOST<br/>SPLY - 350</h1>
                    <p className="home__description">Explore the new collections of sneakers</p>
                    <Link to="/products" className="button">Explore now</Link>
                </div>
            </div>
        </section>
    )
}

export default Banner
