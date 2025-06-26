import { useState } from 'react';
import { checkPassword } from './LoginScripts.js';
import './App.css';

function Login() {
  const [passwordResponse, setPasswordResponse] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const handleChange = (e) => {
    setPasswordText(e.target.value);
    if(value != null){
    setPasswordResponse(checkPassword(passwordText).join("\n"));
    }
  }


  return (
    <div className="App">
      <header className="Header">Beacon
      </header>
      <text className='login-item text'>Username</text>
      <input type='textbox' className='textbox'></input>
      <text className='login-item text'>Password</text>
      <input name='passwordText' type='textbox' className='textbox' onChange={handleChange}></input>
      <text className='login-item text'>{passwordResponse}</text>
      <button className='login-item button space'>Log In</button>
      <button className='login-item button'>I want to use a trial account</button>
    </div>
  );


}

export default Login;
