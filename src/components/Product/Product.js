import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Product = ({product,handleAddToCart}) => {
    return (
        <div className='product'>
            <img className='product-img' src={product.img} alt="" />
            <h2>{product.name}</h2>
            <h3>Price : ${product.price}</h3>
            <button onClick={() => handleAddToCart(product.id)} className='cart-btn'>ADD TO CART <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default Product;