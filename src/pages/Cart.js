import React, { useContext } from 'react'
import { Context } from '../Context'
import CartItem from '../components/CartItem'

export const Cart = () => {
    const { cartItems } = useContext(Context)
    const cartItemElements = cartItems.map( item => (
        <CartItem 
            key={item.id} 
            item={item} 
        />
    ))

    const price = 5.99; 
    const sum = cartItems.length * price;
    const totalCost = sum.toLocaleString("en-US", {style: "currency", currency: "USD"})

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost} </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}