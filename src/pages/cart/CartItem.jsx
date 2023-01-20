import React,{ useContext }  from 'react'
import {ShopContext} from "./../../context/shop-context"
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const CartItem = (props) => {
  // Estrago tutta l'nformazione del prodotto che è stata fornita attraverso la proprieta data   
  const {id,size,color,brand,type,price,img} = props.data;

  // Estrago dal ShopContext tutti i valori e le funzioni che mi servono qui
  const {cartItems,addToCart,removeFromCart,deleteFromCart,updateCartItemCount} = useContext(ShopContext);
    return (
    <div className='cart-item'>
        <img src={img} alt="product image"/> 
    
        <div className='description'>
          <div>
            <div className='description-row'>
              <p className='product-brand'>brand:{brand}</p>
              <p className='product-type'>categoria:{type}</p>
            </div>
            <div>
              <p className='product-size'>taglia: {size}</p>
              <p className='product-color'>colore:{color}</p>
            </div>
          </div>


          <div>
            <p className='product-total-price'>totale:€ {price * cartItems[id]}</p>
          </div>

      

            <div className='count-handler'>
                 <RemoveCircleIcon className="count-handler-btn" onClick={()=> removeFromCart(id)}/>
                {/*Voglio poter gestire il numero di prodotti per ogni CartItem anche manualmente scrivendo un valore
                nell'input per questo uso onChange che prende come parametro l'event, su cui applico targe e value per 
                prendere ciò che è dentro l'input ,ma visto che questa è una stringa, con il Number la trasformo in un valore numerico e lo passo
                come parametro nella funzione updateCartItemCount, che prende come parametro anche l'id del prodotto
                in questione cosi so quale key di cartItems devo aggiornare */}
                <input value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value),id)}/>
                <AddCircleIcon  className="count-handler-btn" onClick={()=> addToCart(id)}/>
            </div>
            <div>
            <DeleteIcon className='product-remove' onClick={()=> deleteFromCart(id)}/>
          </div>
        
          </div>
        </div>


  )
}

export default CartItem