//CSS
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

//Toastify
import {ToastContainer} from 'react-toastify';

//Componentes
import Navbar from "./Navbar/Navbar"; 
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contacto from './Contacto/Contacto';



const App = () => {
    return (

        <>
        <BrowserRouter>
        
            <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/> 
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/category/:idCategoria' element={<ItemListContainer/>} />
                <Route path='/Contacto' element={<Contacto/>}/>   
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
       
        </>
             
    
            
    );
}

export default App;


// import ItemCount from "./ItemCount/ItemCount";
// <ItemCount valInicial={1} stock={10}/> 