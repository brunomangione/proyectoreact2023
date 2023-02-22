import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()

    return (
        <>
        <Link className="nav-link" to={'/cart'}>
        <button className="btn btn-outline-light"><i className='fa-solid fa-cart-shopping fa-xl'></i>Carrito</button></Link> 
        {getItemQuantity() > 0 && <span className='cantCarrito'> {getItemQuantity()}</span>}
    </>
    );
}

export default CartWidget;


//  <Link className='nav-link' to={'/cart'}/><button className='btn btn-outline-light'> <i className='fa-solid fa-cart-shopping fa-xl'></i> CARRITO</button></Link> 