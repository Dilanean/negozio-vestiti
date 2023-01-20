import React, { useContext } from 'react'
import "./styles.css"
import {ShopContext} from "./../../context/shop-context"

const ViewProduct = () => {

  const {viewItem,addToCart,addToFavorites} = useContext(ShopContext);

  let img = viewItem[0];
  let brand = viewItem[1];
  let type = viewItem[2];
  let color = viewItem[3];
  let price = viewItem[4];
  let id = viewItem[5];

  return (
    <div className='view-page'>
        <div className='view-product-image'>
            <img src={img} alt="product image"/>
        </div>

        <div className='view-product-description'>
            <p className='view-product-brand'>{brand}</p>
            <p className='view-product-type'>{type}</p>
            <p className='view-product-price'>€ {price}</p>
            <p className='view-product-color'>{color}</p>

            <div className='view-btns'>
                <button className='view-product-cart-btn' onClick={()=>addToCart(id)}>Aggiungi al carello</button>
                <button className='view-product-heart-btn' onClick={()=> addToFavorites(id)}>Aggiungi ai preferiti</button>
            </div>
        </div>
    </div>
  )
}

export default ViewProduct