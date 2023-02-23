import React from 'react';
import { Link } from 'react-router-dom';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

export const Item = ({item}) => {
    const {darkMode} = useDarkModeContext()
    return (
    <div className={`card mb-3 cardProducto ${darkMode ? 'text-white bg-secondary' : 'border-light'}`}> 
        <img src={`../img/${item.img}`} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body cardBody">
                <h4 className="card-title">{item.nombre} {item.modelo}</h4>
                <p className="card-text">{item.marca}</p>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <button className='btn btn-light'><Link className='"nav-link' to={`/item/${item.id}`}>Ver Producto</Link> </button>
        </div>
        </div>

    )}


export default Item;

