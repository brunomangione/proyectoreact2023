import React from 'react';

const Categorias = () => {
    return (
        <>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><button className='btn btn-outline-light'>Productos</button></a>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Cortes Generales</a>
                <a className="dropdown-item" href="#">Cortes Gourmets</a>
            </div>
        </li>
        </>
      
    );
}

export default Categorias;
