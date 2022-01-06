import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

//funcion que llama y desestructura el useCounter con las funciones requeridas
    const { state, increment, decrement, reset} = useCounter();

    return (
        <>                                  
            <h1>Counter whit custom hook: { state }</h1>
            <hr/>

            <button onClick={ increment } className="btn">+ 1</button>
            <button onClick={ reset } className="btn">Reset</button>
            <button onClick={ decrement } className="btn">- 1</button>    
        </>
    )
}
