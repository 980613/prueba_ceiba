import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

//Componente que renderiza los Gifs y donde se escuentra la peticio y la API//

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );


    return (
        <>
            <h3 className="card animate__animated animate__fadeInDown">{ category }</h3>

            { loading && <p className="card animate__animated animate__wobble">Loading...</p>}

            { <div className = "card-grid">
        
                {   //Mapeo y desestructuracion de lo que necesitamos del objeto//
                    images.map( img => (
                        <GifGridItem 
                            key = { img.id }
                            {... img }
                        />
                    ))
                }
        
            </div> }
        </>
    )
}

