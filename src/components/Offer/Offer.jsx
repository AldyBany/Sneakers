import React from 'react'

const Offer = () => {
    return (
        <section className="offer section">
            <div className="offer__container bg-grid">
                <div className="offer__data">
                    <h3 className="offer__title">50% OFF</h3>
                    <p className="offer__description">In Addidas Superstar sneakers</p>
                    <a href="#" className="button">Shop Now</a>
                </div>

                <img src="./images/offert.png" alt="" className="offer__img"/>
            </div>
        </section>
    )
}

export default Offer
