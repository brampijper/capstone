import React, { useState } from 'react'

export const Image = ({img, className}) => {
    const [hovered, setHovered] = useState(false)
  
    const heartIcon = hovered && <i className="ri-heart-line favorite"></i>
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>


    return (
        <div 
            className={` ${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon}
            {cartIcon}
        </div>
    )
}