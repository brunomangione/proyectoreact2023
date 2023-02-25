//CSS
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

//Toastify
import {ToastContainer} from 'react-toastify';

//Componentes
import Navbar from "./Navbar/Navbar"; 
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Contacto from './Contacto/Contacto';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Recetas from './Recetas/Recetas';
//Router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Context
import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoProvider } from '../context/CarritoContext';

//Firebase
import { cargarBDD } from '../firebase/firebase';
import { getProductos } from '../firebase/firebase';
import { updateProducto } from '../firebase/firebase';


const App = () => {

    //cargarBDD()
    
    return (

        <>
        <BrowserRouter>
            <CarritoProvider>
                <DarkModeProvider>
                    <Navbar/>
                        <Routes>
                            <Route path='/' element={<ItemListContainer/>}/> 
                            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                            <Route path='/category/:idCategoria' element={<ItemListContainer/>} />
                            <Route path='/recetas' element={<Recetas/>}/> 
                            <Route path='/contacto' element={<Contacto/>}/> 
                            <Route path='/cart' element={<Cart/>}/> 
                            <Route path='/checkout' element={<Checkout/>}/> 
                        </Routes>
                        <ToastContainer/>
                </DarkModeProvider>
            </CarritoProvider>
        </BrowserRouter>
       
        </>
             
    
            
    );
}

export default App;


// import ItemCount from "./ItemCount/ItemCount";
// <ItemCount valInicial={1} stock={10}/> 