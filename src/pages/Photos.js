import React, { useContext } from 'react'
import { Context } from '../Context'
import { Image } from '../components/Image'
import {getClass} from "../utils"

export const Photos = () => {
    const { allPhotos } = useContext(Context)
    console.log(allPhotos)
    const photos = allPhotos.map( (photo, index) => (
        <Image 
            key={photo.id} 
            img={photo}
            className={getClass(index)} 
        />
    ))
    return (
        <main className="photos">
            <h1>Images go here</h1>
            {photos}
        </main>
    )
}