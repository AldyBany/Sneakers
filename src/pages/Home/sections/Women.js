import React,{useContext} from 'react'
import {DataContext} from '../../../contexts/DataContext'

const Women  = () => {

     const {products,handleAddTocart} = useContext(DataContext)
    return (
         <section className="women section" id="women">
            <h2 className="section-title">WOMEN SNEAKERS</h2>

            <div className="women__container bg-grid">
            {
                products.slice(7,11).map((product)=>(
                    <article className="sneaker" key={product.id}>
                        <div className="sneaker__sale">Sale</div>
                        <img src={product.media.source} alt="" className="sneaker__img"/>
                        <span className="sneaker__name">{product.name}</span>
                        <span className="sneaker__price">${product.price.formatted}</span>
                        <div className="button-light" onClick={()=>handleAddTocart(product.id,1)}>Add to Cart <i
                                className="bx bx-right-arrow-alt button-icon"></i></div>
                    </article>
                ))
            }
                

              
            </div>
        </section>
    )
}

export default Women 
