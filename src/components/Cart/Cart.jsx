import React,{useContext} from 'react';
import { Container, Typography, Button, Grid,Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
// import './styles.css';
import {DataContext} from '../../contexts/DataContext'

const Cart = () => {
  // const classes = useStyles();
  const {cart, handleUpdateCartQty,handleRemoveCartQty,handleEmptycart} = useContext(DataContext)


  // const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link  to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Box className="featured__container bg-grid">
        {cart.line_items.map((lineItem) => (
          <Box  key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveCartQty} />
          </Box>
        ))}
      </Box>
      <div>
        <Typography variant="h4" style={{margin:'90px 0 50px'}}>Total: {cart.subtotal.formatted_with_symbol}</Typography>
        <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
          <button className="empty__btn"  size="large" type="button" variant="contained" color="secondary" onClick={()=>handleEmptycart}>Empty cart</button>
          <Link  className="checkout__btn" to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Link>
        </div>
      </div>
    </>
  );

  return (
    <Container>
    
      <Typography  variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
