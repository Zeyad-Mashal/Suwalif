'use client'
import React, { createContext, useState, useEffect } from 'react';
import getToCartApi from "./getToCartApi"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [allCart, setAllCart] = useState([]);
    const [cartNumber, setCartNumber] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [cartItems, setCartItems] = useState([]);

    const AddToCart = (item) => {
        setCartItems([...cartItems, item]); // Add new item to the cart
    };

    useEffect(() => {
        getToCartApi(setLoading, setError, setAllCart, setCartNumber);
    }, []);

    return (
        <CartContext.Provider value={{ allCart, cartNumber, loading, AddToCart }}>
            {children}
        </CartContext.Provider>
    );
};
