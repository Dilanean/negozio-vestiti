import React, { useContext } from 'react'
import ShopContext from '../../context/shop-context';
import {ShoppingCart } from 'phosphor-react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import "./styles.css"
import { Link } from 'react-router-dom';

const FavoriteItem = (props) => {
 
    const {id,size,color,brand,type,price,img} = props.data;

    const {cartItems,addToCart,viewProduct,deleteFavoriteItem} = useContext(ShopContext);

   const cartItemsAmount = cartItems[id];

 
 return (
    <div className='favorite-item'>
        <div className='favorite-item-img'>
            <img src={img} alt="product image"/>
            <div className='favorite-item-layer'>
            <Link to="/view"><VisibilityIcon className='view-product-icon'
                 onClick={()=>viewProduct(img,brand,type,color,price,id)}/></Link>
            <DeleteForeverIcon className='favorite-item-delete-icon' onClick={()=> deleteFavoriteItem(id)}/>     
            </div>
        </div>

        <p className='favorite-item-brand'>{brand}</p>
        <p className='favorite-item-type'>{type}</p>
        <p className='favorite-item-size'>{size}</p>
        <p className='favorite-item-color'>{color}</p>
        <p className='favorite-item-price'>€ {price}</p>

        <button className='add-to-cart-btn' onClick={()=> addToCart(id)}>Aggiungi<ShoppingCart size={15}/>{cartItemsAmount > 0 && <>({cartItemsAmount})</> }</button>
    </div>
  )
}

export default FavoriteItem