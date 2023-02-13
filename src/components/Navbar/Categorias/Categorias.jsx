import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = React.memo(() => {
    return (
        <>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><button className='btn btn-outline-light'>Productos</button></a>
            <ul className="dropdown-menu">
                <li><Link className='dropdown-item' to={"/category/Regulares"}>Cortes Regulares</Link></li>
                <li><Link className='dropdown-item' to={"/category/Premium"}>Cortes Premium</Link></li>
                <li><Link className='dropdown-item' to={"/category/Achuras"}>Achuras</Link></li>
            </ul>
        </li>
        </>
      
    );
})

export default Categorias;
