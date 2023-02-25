import React from 'react';
import { Link } from 'react-router-dom';

const Recetas = () => {
    
    return (
        <>
        <div className='recetasBody'>
        <div className="card mb-3">
            <h3 className="card-header">Recetas</h3>
                <div className="card-body">
                    <h4 className="card-title">Las recetas mas ricas para preparar con nuestros cortes</h4>
                </div>
                <div className="card-body">
                    <h3 className="card-title">MATAMBRE A LA PIZZA</h3>
                </div>
                <img src="../img/recetaMatambre.jpeg" className="imgReceta"/>
                
                <div className="card-body">
                <p className="card-text">Ingredientes (4 raciones)
                ·Matambre de 1 kilo 100 gr. aproximadamente
                ·1 taza puré de tomate
                ·1 ajo picadito
                ·1 cebolla chica
                ·1/2 morrón rojo
                ·Sal y pimienta a gusto
                ·Leche cant. necesaria
                ·300 gr. mozzarella
                ·Perejil fresco picado</p>

                <p className="card-text">Pasos
                ·Preparamos la salsa poniendo un chorro de aceite en el fondo de una olla, colocamos el ajo, cebolla y morrón, salamos y cocinamos un poco. Luego agregamos el puré de tomate, rectifivcamos sal y pimienta, tapamos y dejamos a fuego suave hasta terminar la cocción. Si querés podés agregár una cucharadita de azúcar para contrarestár la acides del tomate. Reserva

                ·Preparamos el matambre: Pone sobre fuego fuerte una olla con fondo bien amplio o paellera, agregá un buen chorro de aceite y una vez caliente apoyá el matambre del lado de la grasita ( yo lo corte en dos por que no me entraba).

                ·Sellá bien y una vez dorado dalo vuelta, cociná un poco más, salpimetá y volcá un poco más de 1/4 taza de leche sobre el. Dejá que termine la cocción y reduzca por completo la leche (hace lo mismo con la mitad de matambre reservado).

                ·Una vez que el matambre está listo acomodarlo en la misma olla con la grasita hacia arriba, bañalo en salsa, trocitos de mozzarella, tapa y deja a fuego suave hasta que la mozzarella que funda por completo.

                ·Retiralo y acomodalo sobre un buen plato amplio. Antes de servir espolvorealo con perejil picado fresco. Repetí la misma operación con la mitad restante.</p>

                </div>
    
            <div className="card-body">
                <a href="./item/12901M1wMIKiak76OZhB" className="card-link">Compra Nuestro Matambre</a>
                
            </div>
    
        </div>
  
        </div>

        </>
    );
}

export default Recetas;
