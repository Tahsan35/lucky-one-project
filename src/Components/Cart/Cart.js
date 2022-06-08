import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let name='';
    for (const product of cart) {
        name=name+product.name
    }
    console.log(cart)
    return (
        <div className='cart'>
            <h1>hellow from cart</h1>
                <h3>{name}</h3>
        </div>
    );
};

export default Cart;