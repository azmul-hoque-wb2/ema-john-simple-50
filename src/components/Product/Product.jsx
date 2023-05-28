import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    console.log(props)
    const { img, name, saler, ratings, quantity, price } = props.product;
    const handleAddToCart = props.handleAddToCart;

    // const handleAddToCart = (product) =>{
    //     console.log(product)
    // }

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price:${price} </p>
                <p>Manufacturar:{saler} </p>
                <p>Rating:{ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;