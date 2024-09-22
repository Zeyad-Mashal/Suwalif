'use client'
import React, { useState } from 'react'
import Cart from "../../../components/Cart/Cart"
import Navbar from '@/src/components/Navbartop/Navbar'
import removeToCartApi from '../api/cart/removeToCartApi'
const page = () => {
    const [totalCart, setTotalCart] = useState(0)
    const removeCart = (setError: any, setAllCart: any, setCartNumber: any, setloading: any, productId: any) => {
        removeToCartApi(setError, setAllCart, setCartNumber, setloading, productId, setTotalCart)
    }
    return (
        <>
            <Navbar totalCart={totalCart} setTotalCart={setTotalCart} />
            <Cart removeCart={removeCart} />
        </>
    )
}

export default page
