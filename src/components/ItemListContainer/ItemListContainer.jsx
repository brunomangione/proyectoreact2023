import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()
    const {darkMode} = useDarkModeContext()
    console.log(darkMode)

    useEffect(() => {
        if(idCategoria) {
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prod => prod.idCategoria === parseInt(idCategoria))
                const productsList = <ItemList products={products} plantilla={'item'}/> //Array de productos en JSX
                console.log(productsList)
                setProductos(productsList)
            })
        } else {
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
                console.log(products)
                const productsList = <ItemList products={products} plantilla={'item'}/> //Array de productos en JSX
                console.log(productsList)
                setProductos(productsList)
            })
        }
        
    }, [idCategoria])
    // [prop] cuando se renderiza y actualiza 
    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    )
}



export default ItemListContainer;
 