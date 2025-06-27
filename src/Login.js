import { useState } from 'react';
import { checkPassword } from './LoginScripts.js';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [passwordResponse, setPasswordResponse] = useState("");
  const navigate = useNavigate();



  const handleChange = (e) => {
    const newPassword = e.target.value;
    if(newPassword.length === 0){
    setPasswordResponse('');
    }else{
    setPasswordResponse(checkPassword(newPassword));
    }
  }


  return (
    <div className="App">
      <header className="Header">Beacon.
      </header>
      <input type='textbox' className='textbox space' placeholder='username'></input>
      <input name='passwordText' type='password' className='textbox pw-space' placeholder= 'password'onChange={handleChange}></input>
      <button className='login-item button space space-top'>Log In</button>
      <button className='login-item button space' onClick={() => navigate('/createAccount')}>Don't have an account?</button>
      <button className='login-item button'>I want to use a trial account</button>

    
    </div>
  );


}

export default Login;
