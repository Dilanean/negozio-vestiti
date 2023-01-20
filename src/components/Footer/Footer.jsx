import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import "./styles.css"

import {FacebookLogo, InstagramLogo,PinterestLogo,Phone, Envelope, MapPin, Plus} from 'phosphor-react'



const Footer = () => {

    const [expandToggles,setexpandToggles] = useState([false,false,false]);

    const expandToggle = (id) =>{
       const newExpandTogglesArray = expandToggles.map((list, index) => {
        return (index === id ? !list : list)
       })
       setexpandToggles(newExpandTogglesArray);
    }

  return (
    <footer>
        <div className='footer-menus'>
        <div className='footer-box'>
            <h2 className='footer-box-title'>
                FAQ
                <Plus  className='plus' color='#E6A91D' onClick={()=> expandToggle(0)}/>
            </h2>
            

            <ul className={expandToggles[0] ? "expand-true" : "expand-false"}>
                <Link className='footer-help-links'>Come ordinare</Link>
                <Link className='footer-help-links'>Pagamento</Link>
                <Link className='footer-help-links'>Tempi di spedizione</Link>
                <Link className='footer-help-links'>Consegna e resi</Link>
            </ul>
        </div>

        <div className='footer-box'>
            <h2 className='footer-box-title'>
                Socials
                <Plus className='plus' color='#E6A91D' onClick={()=> expandToggle(1)}/>
            </h2>
            

            <ul className={expandToggles[1] ? "expand-true" : "expand-false"}>
                <a href='https://it-it.facebook.com/' target="_blank" className='socials-link'><FacebookLogo color='#338CC7' size={20}/><span>Facebook</span></a>
                <a href='https://www.instagram.com/' target="_blank" className='socials-link'><InstagramLogo color='#FF7008' size={20}/><span>Instagram</span></a>
                <a href='https://www.pinterest.it/' target="_blank" className='socials-link'><PinterestLogo color='#B01F35' size={20}/><span>Pinterest</span></a>
            </ul>
        </div>
        
        
        <div className='footer-box'>
            <h2 className='footer-box-title'>
                Contatti
                <Plus className='plus' color='#E6A91D' onClick={()=> expandToggle(2)}/>
            </h2>
         

            <ul className={expandToggles[2] ? "expand-true" : "expand-false"}>
                <a className='contacts-link' href='tel:123456789'><Phone color='#fff'/><span>123 456 789</span></a>
                <a className='contacts-link' href='mailto: basil@gmail.it'><Envelope color='#fff'/><span>basil@gmail.it</span></a>
                <a className='contacts-link' href='https://www.google.com/search?client=firefox-b-d&q=via+tripoli' target="_blank"><MapPin color='#fff'/><span>Via Tripoli,Torino</span></a>
            </ul>
        </div>
        </div>

        <div className='footer-rights'>
            <div className="footer-rights-content">
        &copy; 2023 Created by Arman Dilanean 
            <a className='github-link' href='https://github.com/Dilanean' target="_blank" rel="noreferrer"><GitHubIcon className='github-icon'/></a>
            </div>
        </div>
        
    </footer>


  )
}

export default Footer