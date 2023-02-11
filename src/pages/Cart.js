import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import CartItem from '../components/CartItem'

export const Cart = () => {
    const [cartText, setCartText] = useState("Place order")
    const { cartItems, removeFromCart } = useContext(Context)

    const price = 5.99; 
    const sum = cartItems.length * price;
    const totalCost = sum.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemElements = cartItems.map( item => (
        <CartItem 
            key={item.id} 
            item={item} 
        />
    ))

    function placeOrder() {
        setCartText("Ordering...")
        setTimeout( () => {
            setCartText("Order placed!")
            cartItems.forEach(item => removeFromCart(item.id))
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost} </p>
            <div className="order-button">
                {
                    cartItems.length > 0 
                        ? <button onClick={placeOrder}>{cartText}</button>
                        : <p>You have no items in your cart.</p>
                }
            </div>
        </main>
    )
}