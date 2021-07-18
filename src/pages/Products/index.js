import React ,{useContext} from 'react'
import {DataContext} from '../../contexts/DataContext'
const Products = () => {
    const {products,handleAddTocart} = useContext(DataContext)
    return (
         <main className="l-main">
        <section className="featured section" id="shop">
            <h2 className="section-title">All Products</h2>

            <div className="featured__container bg-grid">
                {products.map((product)=>(
                    <article className="sneaker" key={product.id}>
                        <img src={product.media.source} alt="" className="sneaker__img"/>
                        <span className="sneaker__name">{product.name}</span>
                        <span className="sneaker__price">${product.price.formatted}</span>
                        <div className="button-light" onClick={()=>handleAddTocart(product.id,1)}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></div>
                    </article>
                ))}
                

                {/* <article className="sneaker">
                    <img src="images/new3.png" alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Free RN</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="#" className="button-light">Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src="images/new4.png" alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Free RN</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="#" className="button-light">Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src="images/new5.png" alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Jordan</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="#" className="button-light">Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src="images/featured3.png" alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Free RN</span>
                    <span className="sneaker__price">$149.99</span>
                    <a href="#" className="button-light">Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src="images/featured2.png" alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Sply</span>
                    <span className="sneaker__price">$79.99</span>
                    <a href="#" className="button-light">Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src="images/featured1.png" alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Sply</span>
                    <span className="sneaker__price">$79.99</span>
                    <a href="#" className="button-light">Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src="images/women1.png" alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Sply</span>
                    <span className="sneaker__price">$79.99</span>
                    <a href="#" className="button-light">Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></a>
                </article>

                <article className="sneaker">
                    <img src="images/women2.png" alt="" className="sneaker__img"/>
                    <span className="sneaker__name">Nike Sply</span>
                    <span className="sneaker__price">$79.99</span>
                    <a href="#" className="button-light">Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></a>
                </article> */}
            </div>

            <div className="sneaker__pages bg-grid">
                <div>
                    <span className="sneaker__pag">1</span>
                    <span className="sneaker__pag">2</span>
                    <span className="sneaker__pag">3</span>
                    <span className="sneaker__pag">4</span>
                    <span className="sneaker__pag">&#8594;</span>
                </div>
            </div>
        </section>


    </main>

    )
}

export default Products
