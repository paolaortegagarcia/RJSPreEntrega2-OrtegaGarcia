import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import CartContainer from "./components/CartContainer/CartContainer.jsx";
import CartContextProvider from "./components/Context/CartContext.jsx";
//BrowserRouter: Evalua que va a mostrar en cada ruta
//Routes: Definir las rutas

function App() {
    return (
        <div className="App">
            <BrowserRouter> 
                <CartContextProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={ <ItemListContainer greeting="Bienvenid@" /> } />
                        <Route path="/category/:categoryKey" element={ <ItemListContainer greeting="Categoría:" /> } />
                        <Route path="/item/:key" element={ <ItemDetailContainer /> } />
                        <Route path="/cart" element={ <CartContainer /> } />
                    </Routes>
                </CartContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
