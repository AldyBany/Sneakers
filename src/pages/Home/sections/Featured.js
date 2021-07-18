import React, {useContext,useState} from 'react'
import {DataContext} from '../../../contexts/DataContext'
import {Link} from 'react-router-dom'

const Featured = () => {
    // const [featuredProducts, setFeaturedProducts]=useState([])

    const {products,handleAddTocart} = useContext(DataContext)

    // setFeaturedProducts()
    // products.filter((product)=>product.categories.name ==='Featured')

    
    return (
        <section className="featured section" id="featured">
            <h2 className="section-title">FEATURED</h2>

            <div className="featured__container bg-grid">
                {
                    products.slice(0,3).map((product)=>(
                        <article className="sneaker" key={product.id}>
                            <div className="sneaker__sale">Sale</div>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.media.source} alt="" className="sneaker__img"/>
                            </Link>
                            <span className="sneaker__name">{product.name}</span>
                            <span className="sneaker__price">${product.price.formatted}</span>
                            <div className="button-light" onClick={()=>handleAddTocart(product.id,1)}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></div>
                        </article>
                    ))
                   
                }
               

                
            </div>
        </section>
    )
}

export default Featured
