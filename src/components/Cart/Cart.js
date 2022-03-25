import React from 'react';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import "./Cart.css";

const Cart = ({selectedProducts,handleChoose}) => {


    return (
        <div className='cart'>
            <h2 className='cart-title'>Selected Books</h2>
            <div className="selected-product">
            {selectedProducts.map(product => <SelectedProduct key={Math.random()*10000} selectedProduct={product}></SelectedProduct>)}
            </div>
            <div className='btn'>
            <button onClick={handleChoose} id='chosse1ForMe' type='button'>CHOOSE 1 FOR ME</button>
            </div>
            <div className='btn'>
            <button id="again" type='button'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;