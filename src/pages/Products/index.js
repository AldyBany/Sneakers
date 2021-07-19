import React ,{useContext} from 'react'
import {DataContext} from '../../contexts/DataContext'
import {Link} from 'react-router-dom'

const Products = () => {
    const {products,handleAddTocart} = useContext(DataContext)
    return (
         <main className="l-main">
        <section className="featured section" id="shop">
            <h2 className="section-title">All Products</h2>

            <div className="featured__container bg-grid">
                {products.map((product)=>(
                    <article className="sneaker" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.media.source} alt="" className="sneaker__img"/>
                        </Link>
                        <span className="sneaker__name">{product.name}</span>
                        <span className="sneaker__price">${product.price.formatted}</span>
                        <div className="button-light" onClick={()=>handleAddTocart(product.id,1)}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></div>
                    </article>
                ))}
                

               
            </div>

            {/* <div className="sneaker__pages bg-grid">
                <div>
                    <span className="sneaker__pag">1</span>
                    <span className="sneaker__pag">2</span>
                    <span className="sneaker__pag">3</span>
                    <span className="sneaker__pag">4</span>
                    <span className="sneaker__pag">&#8594;</span>
                </div>
            </div> */}
        </section>


    </main>

    )
}

export default Products
