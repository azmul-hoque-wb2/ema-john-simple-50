import React from 'react';
import './Product.css';


const Product = (props) => {
    console.log(props)
    const { img, name, saler, ratings, quantity, price } = props.product;
    // console.log(img, name , saler, quantity,price)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price:${price} </p>
                <p>Manufacturar:{saler} </p>
                <p>Rating:{ratings}</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;