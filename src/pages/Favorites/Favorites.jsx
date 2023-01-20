import React, { useContext } from 'react'
import ShopContext from '../../context/shop-context'
import FavoriteItem from './FavoriteItem';
import { Products } from './../../Products'
import "./styles.css"

const Favorites = () => {

  const {favoritesItems} = useContext(ShopContext);



  return (
    <div className='favorites-page'>
      <h1>Preferiti</h1>

      <div className='favorites-items'>

      {Products.map((product)=>{
        if (favoritesItems[product.id]!==0){
        return <FavoriteItem data={product}/>
      }
      })}


      </div>

    </div>
  )
}

export default Favorites