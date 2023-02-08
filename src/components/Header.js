import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

export const Header = () => {
    const { cartItems } = useContext(Context)

    const cartClassName = cartItems.length > 0
            ? "ri-shopping-cart-fill ri-fw ri-2x"  
            : "ri-shopping-cart-line ri-fw ri-2x"

    return (
        <header> 
            <Link to="/">
                <h2>Pic some</h2>
            </Link>
            <Link to="/cart">
            <i className={cartClassName}></i>
            </Link>
        </header>
    )
}