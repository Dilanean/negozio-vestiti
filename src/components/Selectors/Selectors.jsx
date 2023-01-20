import React,{useState} from 'react'
import Uomo from '../../pages/Uomo/Uomo';
import "./styles.css"


const Selectors = ({newPreferences}) => {
    const [size,setSize] = useState("S");
    const [color,setColor] = useState("bianco");
  
    const [minPrice,setMinPrice] = useState(40);
    const [maxPrice,setMaxPrice] = useState(2500);
  
  
    const chooseSize = (e)=>{
      setSize(e.target.value);
    }
  
    const chooseColor = (e) =>{
      setColor(e.target.value);
    }
  
    const chooseMinPrice = (e)=>{
      setMinPrice(e.target.value);
    }
  
    const chooseMaxPrice = (e)=>{
      setMaxPrice(e.target.value);
    }
  
  
    return (
      <div>
        <div className='selectors'>
          <select className='size-selector' defaultValue="S" onChange={chooseSize}>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
          </select>
  
          <select className='color-selector' defaultValue="bianco" onChange={chooseColor}>
            <option value="bianco">bianco</option>
            <option value="nero">nero</option>
            <option value="blu">blu</option>
            <option value="rosso">rosso</option>
            <option value="verde">verde</option>
            <option value="giallo">giallo</option>
          </select>
  
      
            <select className='prezzo' defaultValue="40" onChange={chooseMinPrice}>
              <option value="40">€ 40</option>
              <option value="60">€ 60</option>
              <option value="80">€ 80</option>
              <option value="100">€ 100</option>
              <option value="150">€ 150</option>
              <option value="200">€ 200</option>
              <option value="250">€ 250</option>
              <option value="300">€ 300</option>
              <option value="400">€ 400</option>
              <option value="500">€ 500</option>
              <option value="600">€ 600</option>
              <option value="800">€ 800</option>
              <option value="1000">€ 1000</option>
              <option value="1200">€ 1200</option>
              <option value="1400">€ 1400</option>
              <option value="1600">€ 1600</option>
              <option value="2000">€ 2000</option>
              <option value="2200">€ 2200</option>
              <option value="2500">€ 2500</option>
            </select>
  
            <select className='prezzo' defaultValue="2500" onChange={chooseMaxPrice}>
            <option value="40">€ 40</option>
              <option value="60">€ 60</option>
              <option value="80">€ 80</option>
              <option value="100">€ 100</option>
              <option value="150">€ 150</option>
              <option value="200">€ 200</option>
              <option value="250">€ 250</option>
              <option value="300">€ 300</option>
              <option value="400">€ 400</option>
              <option value="500">€ 500</option>
              <option value="600">€ 600</option>
              <option value="800">€ 800</option>
              <option value="1000">€ 1000</option>
              <option value="1200">€ 1200</option>
              <option value="1400">€ 1400</option>
              <option value="1600">€ 1600</option>
              <option value="2000">€ 2000</option>
              <option value="2200">€ 2200</option>
              <option value="2500">€ 2500</option>
            </select>
            </div>
        <button className='filter-btn' onClick={()=> newPreferences([size,color,minPrice,maxPrice])}>Applica</button>
      </div>
    )
}

export default Selectors