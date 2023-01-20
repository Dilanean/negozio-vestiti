import React, {useContext} from 'react'
import { Products} from './../../Products'
import {ShopContext} from "./../../context/shop-context"
import CartItem from './CartItem';
import Visa from "./../../assets/payments/visa.png"
import Master from "./../../assets/payments/master-card.png"
import Paypal from "./../../assets/payments/paypal.png"
import American from "./../../assets/payments/america-express.png"
import "./cart.css"

import { useNavigate } from 'react-router-dom';


const Cart = () => {
    // Estrago da ShopContext le funzioni che mi servono qui
    const {cartItems,getTotalCartAmount} = useContext(ShopContext);

    // il valore che mi restituisce la funzione getTotalCartAmount lo conservo nel totalAmount
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();
    return (
    <div className='cart'>
        <div>
            <h1>Carello</h1>
        </div>

        <div className='cart-inner'>
        <div className='cart-items'>
            { /*Nel carello faccio vedere soltanto i prodotti il cui key uguale al product.id nel cartItems non è nullo
            e ad ogni componente CartItem passo tutta l'informazione di questo prodotto attraverso la proprietà data*/ }
            {Products.map((product)=>{
              if (cartItems[product.id]!==0){
                return <CartItem data={product}/>
              }
            })}
        </div>


        {/* Se il totalAmount è maggiore di zero allora vuol dire che il carello non è vuoto è quidi ha senso fare vedere il checkout,
          altrimenti vale la pena mostrare soltato un messagio che mi communica che il carello è vuoto */}        
        {totalAmount > 0 ?    
        <div className='checkout'>
            <div>  
              <p>Importo dell'ordine  </p><span>€ {totalAmount}</span>
            </div>
            <div>  
            <p>Consegna </p> <span>€ 6.99</span>
            </div>
            <hr></hr>
            <div className='total-checkout'>
            <p>Totale  </p><span>€ {totalAmount + 6.99}</span>
            </div>

            
             {/* Grazie al hook useNavigate posso andare alla pagina desiderata, in questo caso nel home quando, clico sul bottone*/}
            <button className='continue-btn' onClick={()=> navigate("/")}>Continua</button>
            <button className='pay-btn'>Pagamento</button>

            <div className='payments'>
              <img src={Visa} alr="payment method"/>
              <img src={Master} alr="payment method"/>
              <img src={Paypal} alr="payment method"/>
              <img src={American} alr="payment method"/>
            </div>

            <div className='reso'>
              <p>Il prezzo e il costo della spedizione non sono confermati fino alla pagina di pagamento.</p>
              <p>30 giorni per effettuare il reso.</p>
            </div>
        </div>
    : <h1>Il Carello è vuoto</h1>}
    </div>
    </div>
  )
}

export default Cart