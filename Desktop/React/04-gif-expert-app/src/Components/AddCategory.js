import React, { useState} from 'react'

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('') // <== valor inicial del hook//el inputValue siempre va a ser el valor atualizado de lo que se escribio  

    const handleInputChanges = ( e ) =>{ //Funcion que recibe el evento para
        setInputValue( e.target.value)   //escribir en el input con el valor 
    }                                    //actualizado de lo ultimo que se escribio

    const handleSubmit = ( e ) => { //Funcion al momento de dar enter (submit)
        e.preventDefault();//LInea de codigo que previene el refresh por defecto
        //console.log('Submit Hecho')//Imprecion del evento en la consola
       
        if ( inputValue.trim().length > 2){//validacion para evitar errores como el doble posteo o no escribir nada y hacer el submit mal
            setCategories( cats => [ inputValue, ...cats, ] );//se llama el callback cats (categorias) y se añade el valor inicial ( inputValue)
            setInputValue('');//se cambia el estado del valor inicial a un string vacio donde en la pagina cargara los datos registrados 
        }
        
    }

    return (
        <form onSubmit = { handleSubmit }>
           <input
                type='text'
                value={ inputValue } //Valor del value
                onChange={ handleInputChanges } //Disparar evento en la caja de texto cuando el valor cambie
           />
        </form>
    )
};
