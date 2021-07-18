import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';



const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
 
  

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <div style={{marginTop:'80px'}}>
      <article className="sneaker" key={item.id}>
        <img src={item.media.source} alt="" className="sneaker__img"/>
        <span className="sneaker__name">{item.name}</span>
        <span className="sneaker__price">${item.price.formatted}</span>
        <div className="action__btn">
          <div>
            <button onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)} className="product__uBtn">-</button>
            <span className="product__Qty">{item.quantity}</span>
            <button onClick={() => handleUpdateCartQty(item.id, item.quantity + 1) } className="product__uBtn">+</button>
          </div>
          <button onClick={() => handleRemoveFromCart(item.id)} className="product__rbtn">Remove</button>
        </div>
        <span style={{marginTop:'10px'}}>Subtotal: {item.line_total.formatted_with_symbol}</span>
        {/* <div className="button-light" onClick={handleAddTocart}>Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i></div> */}
      </article>
     
    </div>
  );
};

export default CartItem;
