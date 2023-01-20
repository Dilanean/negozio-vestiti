import React, { useState } from 'react'
import Selectors from '../../components/Selectors/Selectors'
import { MaleProducts } from './../../MaleProducts'
import Product from '../../components/Product/Product'
import "./styles.css"

const Uomo = () => {

  const [preferences,setPreferences] = useState(["S","bianco",40,2500]);

  let size = preferences[0];
  let color = preferences[1];
  let minPrice = preferences[2];
  let maxPrice = preferences[3];

  return (
    <div className='shop'>
      <Selectors newPreferences = {preferences => setPreferences(preferences)}/>
        <div className='shop-title'>
            <h1>UOMO</h1>
        </div>


        {/*Vogliamo mostrare ogni prodotto di PRODUCTS, per questo la attraversiamo tutta e prendiamo tutta l'informazione di ogni prodotto(id,nome prezzo ecc)
         e la passiamo nella Componente Product tramitte la proprietà creata data. Dentro la componente Product ci sarà l'UI di ogni prodotto mostrato */}
        <div className='products'>
            {MaleProducts.map((product,key)=>{
            if ((product.size === size) && (product.color === color) && (product.price >=minPrice) && (product.price <= maxPrice)){
                return <Product data={product}  key={key}/>
            }
          }
               
          )}
        </div>
    </div>
  )
}

export default Uomo