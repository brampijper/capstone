import React, { useState, useContext } from 'react'
import { Context } from '../Context'
import PropTypes from 'prop-types';

export const Image = ({img, className}) => {
    const [hovered, setHovered] = useState(false)
    const { toggleIsFavorite } = useContext(Context)

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

    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div 
            className={` ${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        isFavorite: PropTypes.bool,
        url: PropTypes.string,
        id: PropTypes.number
    })
}