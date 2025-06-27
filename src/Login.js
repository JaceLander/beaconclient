import { useState } from 'react';
import { checkPassword } from './LoginScripts.js';
import './App.css';

function Login() {
  const [passwordResponse, setPasswordResponse] = useState("");


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
      {/* <text className='login-item text'>Username</text> */}
      <input type='textbox' className='textbox space' placeholder='username'></input>
      {/* <text className='login-item text'>Password</text> */}
      <input name='passwordText' type='password' className='textbox pw-space' placeholder= 'password'onChange={handleChange}></input>
      <div className='response password-space'>{passwordResponse}</div>
      <button className='login-item button space space-top'>Log In</button>
      <button className='login-item button space'>Don't have an account?</button>
      <button className='login-item button'>I want to use a trial account</button>
    </div>
  );


}

export default Login;
