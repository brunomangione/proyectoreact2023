import React from 'react';


const CartWidget = ({CantCarrito}) => {
    return (
        <>
           <button className='btn btn-outline-light'> <i className='fa-solid fa-cart-shopping fa-xl'></i> </button> 
           <p>{CantCarrito}</p>
        </>
    );
}

export default CartWidget;
