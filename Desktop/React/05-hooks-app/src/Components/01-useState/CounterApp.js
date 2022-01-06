import React, { useState} from 'react';
import './counter.css';

export const CounterApp = () => {
        //cuando usamos el setState (o la funcion definida) para establecer un nuevo valor
        //u otra cosa, caemos encima al estado anterior por eso usamos el 
        //operador spret para almacenar el estado anterior con el nuevo
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });
    //Funcion que extrae los counter y separa en dos pasos el state
    //sin dañar el valor inicial 
    const { counter1, counter2 } = state;

    return (
        <>
         <h1>Counter 1 { counter1 }</h1>
         <h2>Counter 2 { counter2 }</h2>
         <hr/>

         <button 
            className="btn btn-primary"
            onClick={ () => {
                setState({
                    ...state, //operador spret que mantiene el state inicial y agrega
                              //un nuevo estado sin dañar nada
                    counter1: counter1 +1
                })
            }}
            >
            +1
         </button>   
        </>
    )
}
