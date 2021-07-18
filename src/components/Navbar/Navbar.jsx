import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { DataContext } from '../../contexts/DataContext'
import {IconButton,Badge} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'

const Navbar = () => {

    const {cart} = useContext(DataContext)
  return (
    <header className="l-header" id="header">
        <nav className="nav bg-grid">
            <div className="nav__toggle" id="nav-toggle">
                <i className="bx bxs-grid"></i>
            </div>

            <Link to ="/" className="nav__logo">Sneak</Link>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item"><Link to="/" className="nav__link active">Home</Link></li>
                    <li className="nav__item"><Link to="#featured" className="nav__link">Featured</Link></li>
                    <li className="nav__item"><Link to="#women" className="nav__link">Women</Link></li>
                    <li className="nav__item"><Link to="/Product" className="nav__link">New</Link></li>
                    <li className="nav__item"><Link to="/products" className="nav__link">Shop</Link></li>
    
                </ul>
            </div>

            {/* <Link  className="nav__shop">
                <span className="total_items">{cart.total_items}</span>
                
            </Link> */}
            <IconButton component={Link} aria-label="Add to Cart" to="/cart">
                <Badge badgeContent={cart.total_items} primary="error">
                    <i className="bx bx-shopping-bag"></i>
                </Badge>
                
            </IconButton>

        </nav>

    </header>
  )
}

export default Navbar
