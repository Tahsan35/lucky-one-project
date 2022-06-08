
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({product,handleAddToCart}) => {
    // const {product,handleAddToCart} = props;
    const {name, price, img} = product;
    
    return (
        <div className="product">
            <img src={img} alt="" />
                <div className="product-info">
                    <h6 className="product-name">Model: {name}</h6>
                    <p>price:$ {price}</p>
                </div>
                <button onClick={() => handleAddToCart(product)} className="btn btn-primary"><p className="btn-text">Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;