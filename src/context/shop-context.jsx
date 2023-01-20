import React, { createContext, useState } from 'react'
import {Products} from './../Products';



/*con l'aiuto di createContext creaiamo una sorta di magazzino che terrà traccia dei stati e delle funzioni che useremo in tutto il progetto*/ 
export const ShopContext = createContext(null)




/* Se scrivessi cart[i]=1 allora ogni prodotto sarà già presente in quantità di 1 nel carello*/
const getDefaultCart = () =>{
    let cart = {};
    for (let i = 1; i<= Products.length; i++){
        cart[i] = 0;
    }
    return cart;
}


export const ShopContextProvider = (props) => {
   

   
    /*cartItems sarà un oggetto formato da 8 keys e ad ogni key corrisponde a quanti prodotti con l'id
   uguale al key ci sono al momento nel carello , inizialmente con la funzione getDefaultCart ogni key lo metto ugule a zero, cioè non ci 
   sono oggetti nel cart*. cartItems tiene traccia di quante volte ogni elemento del nostro shop è presente nel carello*/
    
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [favoritesItems,setFavoritesItems] = useState(getDefaultCart());
    const [favoritesCount,setFavoritesCount] = useState(0);
    const [cartItemsCount,setCartItemsCount] = useState(0);

    const [viewItem,setViewItem] = useState([])

    // Questa funzione mi restituisce la somma totale nel carello
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        // E' questo il modo per attraversare un Oggetto a differenza di un array
        for (const item in cartItems){
            if (cartItems[item] > 0){

                // La funzione find mi restituisce il product che soddisfa la condizione richiesta
                let infoItem = Products.find((product)=> product.id === Number(item));
              

                //Poi da questo prodotto estrago solo il price e lo moltiplico per la quantità di questo prodotto
                totalAmount += cartItems[item] * infoItem.price
            }
        }

        return totalAmount;
    }

    console.log(cartItems)


    /* Questa funzione aggiunte un prodotto al carello prendendo come paramentro l'id del prodotto che vogliamo aggiungere.
     La funzione setCartItems mi restituisce lo stesso oggetto cartItems di prima (prev) e visto che è un oggetto lo scrivo
     tra parentesi graffe ma con un piccolo cambiamento, l'id attuale cioè quello di posto [itemId] lo sostituisco con quello preccedente + 1, */
    const addToCart = (itemId)=>{
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId] + 1}))
        setCartItemsCount(cartItemsCount + 1);
    }

    /* Analogamente la funzione removeCart mi toglie un prodotto dal carello semplicemente diminuendo di 1 il numero di questi 
    oggeti che erano nel carello */
    const removeFromCart = (itemId)=>{
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId] - 1}))
        setCartItemsCount(cartItemsCount - 1);
    }

    const deleteFromCart = (itemId)=>{
        setCartItems((prev) => ({...prev,[itemId]: 0}))
        setCartItemsCount(cartItemsCount - cartItems[itemId]);
    }

    const addToFavorites = (itemId) =>{
        setFavoritesItems((prev)=> ({...prev,[itemId]: prev[itemId] + 1}))
        setFavoritesCount(favoritesCount + 1)
    }

    const deleteFavoriteItem = (itemId) =>{
        setFavoritesItems((prev)=> ({...prev,[itemId]: 0}))
        setFavoritesCount(favoritesCount - 1)
    }

    const viewProduct = (img,brand,type,color,price,id)=>{
        setViewItem([img,brand,type,color,price,id]);
    }


    /*Questa funzione mi permette di aggiornare il key di ogni cartItems manualmente dall'input, dove newAmount sarà
    il valore scritto nell'input e itemId è l'id del prodotto interessato. Grazi alla funzione setCartItems sostituisco
    il cartItems precedente prev con un'altro uguale a questo solo che il key con il calore itemId sarà uguale al
    newAmount scritto nell'input*/
    const updateCartItemCount = (newAmount,itemId)=>{
        setCartItems((prev) => ({...prev, [itemId]: newAmount }))
    }

   

    const contextValue = {cartItems,addToCart,removeFromCart,deleteFromCart,cartItemsCount,addToFavorites,deleteFavoriteItem,favoritesItems,favoritesCount,updateCartItemCount,viewProduct,viewItem,getTotalCartAmount};

    return (

     /* La componente ShopContext.Provider grazie a props.children mi mostrerà tutto quello che è stato avvolto dentro la componente. 
     Nel value ci sono tutte le funzioni e i stati che li voglio passare al Provider, tutte racchiuse nel contextValue */   
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContext