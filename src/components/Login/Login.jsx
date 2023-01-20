import React from 'react'
import "./styles.css"
import CloseIcon from '@mui/icons-material/Close'


const Login = ({closeLogin}) => {
  return (
    <div className='login-window'>
    <div className='login-camp'>
    <CloseIcon className='close-login' onClick={closeLogin}/>
        <h3 className='login-title'>Accedi</h3>
        <p className='login-description'>Iscriviti per non perdere vantaggi esclusivi</p>
        
        <form className='login-form'>
            <label for="email">Email<span className='asterisk'>*</span></label>
            <input className='email' name='email' type="email"/>
            
            <label for="password">Password<span className='asterisk'>*</span></label>
            <input className='password' name='password' type="password"/>

            <div className='password-actions'>
                <input type="checkbox" name="save-password"/>
                <label for="save-password">Ricordami</label>
            </div>

            <div className='login-btns'>
                <button className='login-btn'>Accedi</button>
                <button className='register-btn'>Iscriviti</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Login