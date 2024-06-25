"use client";
import React, { useState } from "react";
import NavbarTop from "../Navbartop/Navbar";
import "./Cart.css";
import Image from "next/image";

const Cart = () => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(100); // Initial price for one item
  const itemPrice = 100; // Price of one item

  const incrementCount = () => {
    setCount(count + 1);
    setPrice((count + 1) * itemPrice);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setPrice((count - 1) * itemPrice);
    }
  };

  return (
    <>
      <NavbarTop />
      <section className="cart mt-28">
        <div className="cart_container">
          <h1 className="text-white">Your Cart</h1>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image
                    src="/images/logo.png"
                    width={150}
                    height={150}
                    alt="cart product image"
                  />
                </td>
                <td>Product Name is here</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  perferendis porro modi aut laudantium voluptate!
                </td>
                <td>{price} SAR</td>
                <td>
                  <div className="quantity-counter">
                    <button onClick={incrementCount} className="increment">
                      +
                    </button>
                    <input
                      className="value"
                      type="number"
                      value={count}
                      readOnly
                    />
                    <button onClick={decrementCount} className="decrement">
                      -
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/images/logo.png"
                    width={150}
                    height={150}
                    alt="cart product image"
                  />
                </td>
                <td>Product Name is here</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  perferendis porro modi aut laudantium voluptate!
                </td>
                <td>{price} SAR</td>
                <td>
                  <div className="quantity-counter">
                    <button onClick={incrementCount} className="increment">
                      +
                    </button>
                    <input
                      className="value"
                      type="number"
                      value={count}
                      readOnly
                    />
                    <button onClick={decrementCount} className="decrement">
                      -
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/images/logo.png"
                    width={150}
                    height={150}
                    alt="cart product image"
                  />
                </td>
                <td>Product Name is here</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  perferendis porro modi aut laudantium voluptate!
                </td>
                <td>{price} SAR</td>
                <td>
                  <div className="quantity-counter">
                    <button onClick={incrementCount} className="increment">
                      +
                    </button>
                    <input
                      className="value"
                      type="number"
                      value={count}
                      readOnly
                    />
                    <button onClick={decrementCount} className="decrement">
                      -
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/images/logo.png"
                    width={150}
                    height={150}
                    alt="cart product image"
                  />
                </td>
                <td>Product Name is here</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  perferendis porro modi aut laudantium voluptate!
                </td>
                <td>{price} SAR</td>
                <td>
                  <div className="quantity-counter">
                    <button onClick={incrementCount} className="increment">
                      +
                    </button>
                    <input
                      className="value"
                      type="number"
                      value={count}
                      readOnly
                    />
                    <button onClick={decrementCount} className="decrement">
                      -
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cart_Check">
            <button>Check Out Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
