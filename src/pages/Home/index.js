import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { DataContext } from '../../contexts/DataContext'
import Banner from './sections/Banner'
import Featured from './sections/Featured'
import Women from './sections/Women'
import Offer from '../../components/Offer/Offer'
import Newsletter from '../../components/Newsletter/Newsletter'
import Collections from './sections/Collections'


const Home = () => {
    const {products,cart,handleAddTocart}= useContext(DataContext)
    return (
        <>


    <main className="l-main">

        {/* <!-- Home --> */}
        <Banner/>
        

        {/* <!-- Featured --> */}
        <Featured/>
       

        {/* <!-- collection --> */}
        <Collections/>
       

        {/* <!-- Women sneakers --> */}
        <Women/>
       

        {/* <!-- Offer --> */}
        <Offer/>
       

        {/* <!-- New Collection --> */}
        <section className="new section" id="new">
            <h2 className="section-title">NEW COLLECTION</h2>

            <div className="new__container bg-grid">
                <div className="new__mens">
                    <img src="./images/new1.png" alt="" className="new__mens-img"/>
                    <h3 className="new__title">Mens Shoes</h3>
                    <span className="new__preci">From $79.99</span>
                    <Link to="/products" className="button-light">View Collection <i
                            className="bx bx-right-arrow-alt button-icon"></i></Link>
                </div>

                <div className="new__sneaker">
                    {products.slice(0,6).map((product)=>(
                        <div className="new__sneaker-card" key={product.id}>
                            <img src={product.media.source} alt="" className="new__sneaker-img"/>
                            <div className="new__sneaker-overlay">
                                <div className="button" onClick={handleAddTocart}>Add to Cart</div>
                            </div>
                        </div>
                    ))}
                
                </div>
            </div>
        </section>


        {/* <!-- newsletter --> */}
        <Newsletter/>
        
    </main>

    {/* <!-- footer --> */}
   
            
        </>
    )
}

export default Home
