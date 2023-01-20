import React from 'react'
import UomoImg from "./images/uomo.jpg"
import DonnaImg from "./images/donna.jpg"
import { useNavigate } from 'react-router-dom'
import "./styles.css"

const Home = () => {

    const navigate = useNavigate();
  return (
    <div className='home'>
        <h1 className='home-title'>Nuova collezione di giubotti e cappotti con sconti fino a 40%</h1>
        <div className='home-imgs'>
            <div className='home-img'>
                <img src={UomoImg} alt="Uomo"/>
                <div className='home-img-layer'>
                    <h3 className='home-img-title'>Scopri la collezione UOMO</h3>
                    <button className='home-uomo-btn' onClick={()=> navigate("/uomo")}>Acquista</button>
                </div>
            </div>

            <div className='home-img'>
                <img src={DonnaImg} alt="Donna"/>
                <div className='home-img-layer'>
                    <h3 className='home-img-title'>Scopri la collezione DONNA</h3>
                    <button className='home-donna-btn' onClick={()=> navigate("/donna")}>Acquista</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home