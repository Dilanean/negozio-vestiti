import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import {User} from 'phosphor-react'
import {Heart} from 'phosphor-react'
import "./styles.css"
import logo from "./logo.png"
import Login from '../Login/Login'
import ShopContext from '../../context/shop-context'



const Navbar = () => {

  //Gestisco l'apertura e la chiusura della finestra di login

  const [showLogin, setShowLogin] = useState(false);

  const {favoritesCount,cartItemsCount} = useContext(ShopContext);





  const loginToggle = ()=>{
     setShowLogin(!showLogin);
  }




  return (
    <div className='navbar'>

        <Link className='logo' to="/">
          <img src={logo} alt="logo" width="60"/>
        </Link>

        <div className='pages'>
            <Link className='uomo' to="/uomo">Uomo</Link>
            <Link className='donna' to="/donna">Donna</Link>
        </div>

        <div className='login-cart'>
          <User className='icon user' color='#ffffff' size={20} onClick={loginToggle}/>
          {showLogin && (<Login closeLogin={loginToggle}/>)}
          <Link to="/favorites" className='favorites-link'><Heart className='icon heart' color='#ffffff' size={20}/>
            {favoritesCount>0 && (<p className='favorites-counter'>{favoritesCount}</p>)}
          </Link>
          <Link to="/cart" className='cart-link'><ShoppingCart className='icon shop-cart' color='#ffffff' size={20}/>
          {cartItemsCount >0 && (<p className='cart-counter'>{cartItemsCount}</p>)}
          </Link>
        </div>

    </div>
  )
}

export default Navbar