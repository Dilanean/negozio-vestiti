import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Uomo from './pages/Uomo/Uomo';
import Cart from './pages/cart/Cart';
import {ShopContextProvider} from './context/shop-context';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Donna from './pages/Donna/Donna';
import Favorites from './pages/Favorites/Favorites';
import ViewProduct from './pages/ViewProduct/ViewProduct';



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      {/* Tutti i componenti racchiusi in ShopContextProvider avranno accesso a tutto quello che abbiamo
      messo nel value del Provider */}  
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/uomo' element={<Uomo/>}/>
          <Route path='/donna' element={<Donna/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/view' element={<ViewProduct/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
        <Footer/>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
