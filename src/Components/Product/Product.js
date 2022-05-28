import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, price, img} = props.product;
    console.log(props.product)
    return (
        <div className="product">
            <img src={img} alt="" />
                <div className="product-info">
                    <h6 className="product-name">Model: {name}</h6>
                    <p>price:$ {price}</p>
                </div>
                <button className="btn btn-primary">Add to Cart</button>
        </div>
    );
};

export default Product;