// import { memo } from 'react';
import React from 'react';


export const Small = React.memo(({ value }) => { // memoriza todo el componente
    
    console.log('Me volvi a dibujar :(');

    return (
        <small>{value}</small>
    )
})
