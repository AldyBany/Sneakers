import React,{useContext,useState} from 'react'
import {Link,useLocation} from 'react-router-dom'
import { DataContext } from '../../contexts/DataContext'
import {IconButton,Badge} from '@material-ui/core'


const Navbar = () => {

    const {cart} = useContext(DataContext)
    const location = useLocation()
    const [toggle, setToggle] = useState(false)
  return (
    <header className="l-header" id="header">
        <nav className="nav bg-grid">
           

            <Link to ="/" className="nav__logo">Sneak</Link>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item"><Link to="/" className="nav__link active">Home</Link></li>
                    <li className="nav__item"><a href="#featured" className="nav__link">Featured</a></li>
                    <li className="nav__item"><a href="#women" className="nav__link">Women</a></li>
                    <li className="nav__item"><a href="#new" className="nav__link">New Collection</a></li>
                    <li className="nav__item"><Link to="/products" className="nav__link">Shop</Link></li>
    
                </ul>
            </div>

          
            {   location.pathname !=="/cart" && (
                <>
                {
                    location.pathname !== "/checkout" &&  (
                        <IconButton component={Link} aria-label="Add to Cart" to="/cart">
                            <Badge badgeContent={cart.total_items} primary="error">
                                <i className="bx bx-shopping-bag"></i>
                            </Badge>
                        
                        </IconButton>
                    )
                }
                </>

                    
                )
            }

            {/* <IconButton onClick={()=>setToggle(!toggle)}> */}
                <div onClick={()=>setToggle(!toggle)}>
                    <div className="nav__toggle" id="nav-toggle"  style={{left:`${toggle ?'0':'-100%'}`}}>
                        <i className="bx bxs-grid"></i>
                    </div>
                </div>       
                      
            {/* </IconButton> */}

           
            

        </nav>

    </header>
  )
}

export default Navbar
