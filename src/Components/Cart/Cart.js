import React, { useEffect, useState } from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    const [item, setItem] = useState([]);
    const [filterItem, setFilterItem] = useState([]);

    useEffect(() => {
        const items = cart;
        if (item.length === 4) {
            alert('Oops you already selected 4 products'); 
        } 
        else {
            setItem(items);
        }
    }, [cart]);

    // filter function
    const filterOne = () => {
            if (item.length !== 0) {
                const filter = item[(Math.floor(Math.random() * item.length))];
                setFilterItem(filter);
                item.length = 0;
            }
    }
    // remove Item 
    const removeItem = (productToRemove) => {
        setItem(
            item.filter((product) => product !== productToRemove)
        );
        item.length = 0;
    }
    
    let name='';
    for (const product of cart) {
        name=name+product.name
    };
    return (
        <div className='cart'>
            <h1>choice any 4 shoes</h1>
            <h3 className='text'>{name}</h3>
            <button onClick={filterOne} className='btn-success'>Choose one</button>
        </div>
        
    );
};

export default Cart;