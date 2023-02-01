import React from 'react';
import { Link } from 'react-router-dom';

const Secciones = () => {
    return (
        <>
       
        <li className="nav-item">
          <Link className="nav-link" to={"/"}><button className='btn btn-outline-light'>Inicio</button></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/Recetas"}><button className='btn btn-outline-light'>Recetas</button></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/Contacto"}><button className='btn btn-outline-light'>Contacto</button></Link>
        </li>
            
        </>
    );
}

export default Secciones;
