//CSS
import './App.css';
//Componentes
import Navbar from "./Navbar/Navbar"; 
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



const App = () => {
    return (

        <>
        <BrowserRouter>
        
            <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/> 
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/category/:idCategoria' element={<ItemListContainer/>} />
            </Routes>
        
        </BrowserRouter>
       
        </>
             
    
            
    );
}

export default App;


// import ItemCount from "./ItemCount/ItemCount";
// <ItemCount valInicial={1} stock={10}/> 