import { createContext, useState, useEffect} from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {    
    const [allPhotos, setAllPhotos] = useState([]);
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
    useEffect( () => {
        fetch(url)
            .then( resp => resp.json())
            .then( data => setAllPhotos(data))
    }, [])

    function toggleIsFavorite (id) {

        const updatedArr = allPhotos.map( photo => ( 
            photo.id === id 
                ? { ...photo, isFavorite: !photo.isFavorite }  
                : photo
        ))

        setAllPhotos(updatedArr)
    }

    return (
        <Context.Provider value={{allPhotos, toggleIsFavorite}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }