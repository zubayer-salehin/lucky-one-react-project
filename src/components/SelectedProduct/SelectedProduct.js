import React from 'react';
import './SelectedProduct.css';

const SelectedProduct = ({selectedProduct}) => {
    return (
        <div className='selected-Product'>
            <img className='selcted-img' src={selectedProduct.img} alt="" />
            <span>{selectedProduct.name}</span>
            <span>${selectedProduct.price}</span>
        </div>
    );
};

export default SelectedProduct;