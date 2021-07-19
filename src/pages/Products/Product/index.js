import React,{useContext,useState,useEffect} from 'react'
import { DataContext } from '../../../contexts/DataContext'
import { useParams } from 'react-router-dom'
import './style.css'


const Product = () => {

    const {products,handleAddTocart}= useContext(DataContext)
    const {id} = useParams()
    let product = [products.filter((detail)=>detail.id === id)] 
    
   
    
    


    
   
   
    return (
        <div className="container" >
        <div className="card">
            <div className="shoeBackground">
                <div className="gradients">
                    <div className="gradient second"></div>
                    <div className="gradient"></div>
                    <div className="gradient"></div>
                    <div className="gradient"></div>
                    <div className="gradient"></div>
                </div>
                <h1 className="nike">{product.name}</h1>
                <img src='./images/featured2.png' alt="" className="logo"/>
                <a href="#" className="share"><i className="fas fa-share-alt"></i></a>

                <img src="img/blue.png" alt="" className="shoe show"/>
                <img src="img/red.png" alt="" className="shoe"/>
                <img src="img/green.png" alt="" className="shoe"/>
                <img src="img/orange.png" alt="" className="shoe"/>
                <img src="img/black.png" alt="" className="shoe"/>

            </div>
            <div className="info">
                <div className="shoeName">
                    <div>
                        <h1 className="big">running shoes</h1>
                        <span className="new">new</span>
                    </div>
                    <h3 className="small">Men's running shoes</h3>
                </div>
                <div className="description">
                    <h3 className="title">Product Info</h3>
                    <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                </div>
                <div className="color-container">
                    <h3 className="title">Color</h3>
                    <div className="colors">
                        <span className="color active" primary="#2175f5" color="blue"></span>
                        <span className="color" primary="#f84848" color="red"></span>
                        <span className="color" primary="#29b864" color="green"></span>
                        <span className="color" primary="#ff5521" color="orange"></span>
                        <span className="color" primary="#444" color="black"></span>
                    </div>
                </div>
                <div className="size-container">
                    <h3 className="title">size</h3>
                    <div className="sizes">
                        <span className="size">7</span>
                        <span className="size">8</span>
                        <span className="size active">9</span>
                        <span className="size">10</span>
                        <span className="size">11</span>
                    </div>
                </div>
                <div className="buy-price">
                    <div className="buy" onClick={()=>handleAddTocart}><i className="fas fa-shopping-cart"></i>Add to card</div>
                    <div className="price">
                        <i className="fas fa-dollar-sign"></i>
                        <h1>149</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
    
    
    )
    }


export default Product
