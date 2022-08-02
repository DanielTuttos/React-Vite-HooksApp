import { useState, useMemo } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...');
    }

    return `${iterationNumber} done`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);// solo vuelve a ejecutar la funcion solo si el counter cambia

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>

            <h4>{memorizeValue}</h4>


            <hr />
            <button
                className='btn btn-primary'
                onClick={() => increment()}
            >
                +1
            </button>
            <button
                className="btn btn-secondary"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
