import React from 'react'

const Collections = () => {
    return (
        <section className="collection section">
            <div className="collection__container bg-grid">
                <div className="collection__card">
                    <div className="collection__data">
                        <h3 className="collection__name">Nike</h3>
                        <p className="collection__description">New collection 2020</p>
                        <a href="#" className="button-light">Buy now <i className="bx bx-right-arrow-alt button-icon"></i></a>
                    </div>

                    <img src="./images/collection1.png" alt="" className="collection__img"/>
                </div>

                <div className="collection__card">
                    <div className="collection__data">
                        <h3 className="collection__name">Addidas</h3>
                        <p className="collection__description">New collection 2020</p>
                        <a href="#" className="button-light">Buy now <i className="bx bx-right-arrow-alt button-icon"></i></a>
                    </div>

                    <img src="./images/collection2.png" alt="" className="collection__img"/>
                </div>
            </div>
        </section>
    )
}

export default Collections
