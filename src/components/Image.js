import React, { useContext } from 'react'
import { Context } from '../Context'
import PropTypes from 'prop-types';
import useHover from '../hooks/useHover';

export const Image = ({img, className}) => {
    const [hovered, mouseRef] = useHover()
    const { toggleIsFavorite, addToCart, cartItems, removeFromCart } = useContext(Context)

    function heartIcon() {
        if (img.isFavorite) {
            return <i 
                className="ri-heart-fill favorite" 
                onClick={ () => toggleIsFavorite(img.id)}>
            </i>
        } else if (hovered) {
            return <i 
                className="ri-heart-line favorite" 
                onClick={ () => toggleIsFavorite(img.id)}>
            </i>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some( item => item.id === img.id)
        if (alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={ () => removeFromCart(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={ () => addToCart(img)}></i>
        }
    }

    return (
        <div 
            className={` ${className} image-container`}
            ref={mouseRef}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        isFavorite: PropTypes.bool,
        url: PropTypes.string,
        id: PropTypes.string
    })
}