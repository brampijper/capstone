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
    
    return (
        <Context.Provider value={{allPhotos}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }