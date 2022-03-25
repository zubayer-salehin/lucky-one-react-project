import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {

    const [products,setProducts] = useState([]);
    const [cartProduct,setCartProduct] = useState([]);

    useEffect(() => {
        fetch("products.json")
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (productId) => {
        const findProduct = products.find(product => productId === product.id);
        if (findProduct) {
           const repeateProduct = cartProduct.find(product => findProduct.id === product.id)
           if (!repeateProduct) {
               setCartProduct([...cartProduct,findProduct]);
           }
        }
    }

    return (
        <div className='shop'>
            <div className="shopping-products">
                {products.map(product => <Product key={Math.random()*10000} product={product} handleAddToCart={handleAddToCart}></Product>)}
            </div>
            <div className="shopping-cart">
                <Cart selectedProducts={cartProduct}></Cart>
            </div>
        </div>
    );
};

export default Shop;