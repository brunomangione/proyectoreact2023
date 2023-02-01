import React from 'react';
import { useState } from 'react';

const ItemCount = ({valInicial, stock}) => {

    const [contador, setContador ] = useState(valInicial)
            //vairable   //modificar var    //estado inicial
    const sumar = () => (contador < stock ) && setContador(contador + 1)
    const restar = () => (contador > valInicial) && setContador(contador - 1) //&& hago que sea verdadero, es un if sin else
    
    return (
        <>
        <button className='btn btn-outline-dark' onClick={() => sumar()}>+</button>
            {contador}
        <button className='btn btn-outline-dark' onClick={() => restar()}>-</button>    
        </>
    );
}

export default ItemCount;
