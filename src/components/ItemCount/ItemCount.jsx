import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ItemCount = ({valInicial, stock, onAdd}) => {

    const [contador, setContador ] = useState(valInicial)
            //vairable   //modificar var    //estado inicial
    const sumar = () => (contador < stock ) && setContador(contador + 1)
    const restar = () => (contador > valInicial) && setContador(contador - 1) //&& hago que sea verdadero, es un if sin else
    const agregarCarrito = () => {
        onAdd(contador)
        toast("Se agrego el producto al carrito")
    }

    return (
        <>
        <button className='btn btn-outline-dark' onClick={() => sumar()}>+</button>
            {contador}
        <button className='btn btn-outline-dark' onClick={() => restar()}>-</button>    
        <button className='btn btn-outline-dark' onClick={() => agregarCarrito()}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount;
