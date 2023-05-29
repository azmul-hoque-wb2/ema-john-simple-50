import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const cart = props.cart ;

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping; 
    }
    const  tax = totalPrice * 7/100;

    const grandTotal = totalPrice + totalShipping + totalShipping ;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>selected Item:{cart.length} </p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total shipping: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};


export default Cart;