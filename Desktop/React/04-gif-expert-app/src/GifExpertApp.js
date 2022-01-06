import React, { useState} from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

 export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['kimetsu no yaiba'] );

    //const handleAdd = () => {
    //setCategories ( [...categories, 'Kimetsu no yaiba' ] ) se añade un elemento y se mantiene el estado anterior
    //setCategories (cats => [...cats, 'Kimetsu No Yaiba']);
    //}


    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } /> 
            <hr/>

            {/* <button onClick= { handleAdd } >Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            category = { category }
                            key = { category }//el key es el id unico del elemento y es obligatirio 
                            />                //ponerlo ya que nos genera unos errores en la consola 
                    
                            
                     ))                                             
                }
            </ol>
        </>
    )
}

export default GifExpertApp;