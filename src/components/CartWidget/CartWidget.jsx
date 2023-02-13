import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ({cantCarrito}) => {
    return (
        <>
        <Link className="nav-link" to={'/cart'}><button className="btn btn-outline-light"><i className='fa-solid fa-cart-shopping fa-xl'></i>Carrito</button></Link> 
        <p>{cantCarrito}</p>
    </>
    );
}

export default CartWidget;


//  <Link className='nav-link' to={'/cart'}/><button className='btn btn-outline-light'> <i className='fa-solid fa-cart-shopping fa-xl'></i> CARRITO</button></Link> 