import { createContext, useState, useEffect} from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {    
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
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

    function addToCart (newItem) {
        setCartItems( prevState => [ ...prevState, newItem] )
    }

    function removeFromCart (id) {
        setCartItems( prevState => prevState.filter( item => item.id !== id))
    }

    return (
        <Context.Provider value={{allPhotos, cartItems, toggleIsFavorite, addToCart, removeFromCart}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }