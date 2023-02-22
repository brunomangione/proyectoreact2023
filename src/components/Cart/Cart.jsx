import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useCarritoContext } from '../../context/CarritoContext';

const Cart = () => {
    const {carrito, totalPrice, emptyCart} = useCarritoContext() 
    
    return (
        <>
            { carrito.lenght === 0 
            ? //si carrito esta vacio
            <>
                <h2>Carrito vacio</h2>
                <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 

            </>

            
            : //si carrito tiene productos
            <div className='container cartContainer'>
                 {<ItemList products={carrito} plantilla={'itemCart'}/>}

                 <div className="divButtons">
                    <p>Resumen de la compra: precio total: $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                    <button className='btn btn-danger'onClick={() => emptyCart()}>Vaciar carrito</button>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link> 
                    <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link> 

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