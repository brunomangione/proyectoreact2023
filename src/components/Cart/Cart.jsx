import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const Cart = () => {
    const carrito = [
        {id: 1, nombre: "Arroz", modelo: "1", img: 'apple-tv.jpg', precio: 400, cantidad: 5 },
        {id: 2,nombre: "Fideos", modelo: "2", img: 'apple-tv.jpg',precio: 300, cantidad: 2 },
        {id: 3,nombre: "Manteca", modelo: "3",img: 'apple-tv.jpg',precio: 500, cantidad: 3 },
    ]   
    return (
        <>
            { carrito.lenght === 0 
            ? //si carrito esta vacio
            <>
                <h2> Carrito Vacio</h2> 
                <Link className='nav-link' to={'/'}> <button> Volver a comprar </button></Link>
            </>

            
            : //si carrito tiene productos
            <div className='container cartContainer'>
                 {<ItemList products={carrito} plantilla={'itemCart'}/>}

                 <div className="divButtons">
                    <p>Resumen de la compra: precio total</p>
                    <button className='btn btn-danger'>Vaciar Carrito</button>
                    <Link><button className='btn btn-dark' to={'/'}>Coninuar Comprando</button></Link>
                    <Link><button className='btn btn-dark' to={'/checkout'}>Finalizar Compra</button></Link>
                </div>
            </div>
            

            }
        </>
    )
   
}

export default Cart;


/*
Condicional 1 = 6 complejidad, 2 return y un condicional
 if(true) {
        return <p> Es verdadero</p>

    } 
    return <p> Es falso</p>

Condicional 2 = 6 complejidad, 1 return y 2 condicionales
    const condLogica = true
        return(
        <>
        {condLogica && <p>Es verdadero</p>}
        {!condLogica && <p>Es falso</p>}
       </>
       
Condicional 3 = 5 complejidad, 1 return y un 1 condicional
const condLogica = true
    return (
        <>
            {condLogica ? <p>Es verdaderp </p> : <p> Es Falso </p>}
        </>
    )
    Esta opcion es la optima, siempre que tengamos un T o F, usar un ternario.

*/