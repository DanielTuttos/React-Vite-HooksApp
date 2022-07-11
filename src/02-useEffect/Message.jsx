import { useState } from "react"
import { useEffect } from "react"


export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // console.log('Message Mounted');

        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y })
        }

        window.addEventListener("mousemove", onMouseMove)

        return () => { // cuando se desmonta el conponente osea deja e existir
            // console.log('Message UnMounted');
            // window.removeEventListener("mousemove", onMouseMove)

        }
    }, [])

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    )
}
