import { useState, useEffect, useRef } from 'react'

function useHover() {
    const [hovered, setHovered] = useState(null)
    const mouseRef = useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }

    useEffect( () => { 
        const element = mouseRef.current
        element.addEventListener('mouseover', enter)
        element.addEventListener('mouseout', leave)

        return () => {
            element.removeEventListener('mouseover', enter)
            element.removeEventListener('mouseout', leave)
        }

    }, [])

    return [hovered, mouseRef]

}

export default useHover