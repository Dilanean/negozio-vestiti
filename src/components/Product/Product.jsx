import {ShoppingCart } from 'phosphor-react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { useContext} from 'react'
import {ShopContext} from "../../context/shop-context"
import { Link } from 'react-router-dom';
import "./styles.css"


const Product = (props) => {
  // Prendo da props.data tutte le proprieta che un prodotto ha e li ho passati qui tramitte data in Shop.jsx 
  const {id,brand,type,color,price,img} = props.data;  

 // Usiamo il contesto ShopContext da cui volgiamo estrarre i valori desiderati, qui ci serviranno solo addCart e cartItems

  const {addToCart,cartItems,addToFavorites,viewProduct} = useContext(ShopContext); 


  // A secondo di che valore ha il key di cartItems di posto uguale al id del prodotto so quanti prodotti con questo
  // id ci sono denstro il carello e questo numero lo conservo in cartItemsAmount che poi lo userò nel button più giu
  const cartItemsAmount = cartItems[id];

  return (
    <div className='product'>
        <div className='product-image'>
        <img src={img} alt="product image"/>
        <div className='product-layer'>
          <div className='produc-layer-icons'>
            <FavoriteIcon className='add-heart-icon' onClick={()=> addToFavorites(id)}/>
           <Link to="/view"><VisibilityIcon className='view-product-icon'
                 onClick={()=>viewProduct(img,brand,type,color,price,id)}/></Link>
           
          </div>
        </div>
        </div>
       
        <div className='description'>
            <p className='product-brand'>{brand}</p>
            <p className='product-type'>{type}</p>
            <p className='product-price'>€ {price}</p>
        </div>

        {/*Quando clico su questo bottone invoco la funzione addCart con dentro l'id del prodotto in questione e dentro vicino al testo Add To Cart se ho qualche 
        prodotto di questo tipo nel carello cioè se cartItemAmount è maggiore di 0 allora rendo un tag vuoto con dentro il valore di cartItemsAmount*/}
        <button className='add-to-cart-btn' onClick={()=> addToCart(id)}>Aggiungi<ShoppingCart className='shopin-cart-icon' size={15}/>{cartItemsAmount > 0 && <>({cartItemsAmount})</> }</button>
    </div>
  )
}

export default Product