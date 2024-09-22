'use client'
import React, { useState } from 'react'
import Details from '../../../../components/Details/[productId]/Details'
import Navbar from '@/src/components/Navbartop/Navbar'
import addToCartApi from '../../api/cart/addToCartApi'
const page = () => {
    const user_token = window.localStorage.getItem("user");
    const [cartLoading, setCartLoading] = useState(false);
    const [error, setError] = useState("");
    const [login, setLogin] = useState(false);
    const [totalCart, setTotalCart] = useState(0);
    const addToCart = (productId: any) => {
        if (user_token) {
            const data = {
                quantity: 1,
            };
            addToCartApi(setCartLoading, setError, productId, data, setTotalCart);
        } else {
            setLogin(true);
        }
    };
    return (
        <>
            <Navbar totalCart={totalCart} setTotalCart={setTotalCart} />
            <Details onAddToCart={addToCart} />
        </>
    )
}

export default page
