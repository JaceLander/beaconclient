import { useState } from 'react';
import { checkPassword } from './LoginScripts.js';
import { AnimatePresence, motion } from 'motion/react';
import './App.css';

function CreateAccount() {
  const [passwordResponse, setPasswordResponse] = useState("");
  const [password2Response, setPassword2Response] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState('rgb(0, 0, 0)');


  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if(newPassword.length === 0){
    setPasswordResponse('');
    }else{
    setPasswordResponse(checkPassword(newPassword));
    }
  }

  const handleChangePW = (e) => {
    const EnteredPassword = e.target.value;
    if(EnteredPassword.length === 0){
    setPasswordResponse('');
    }
    if(EnteredPassword === password){
      setPassword2Response("Passwords match!");
      setColor('rgb(21, 138, 0)');
    }else{
    setPassword2Response("Passwords must be the same");
    setColor('rgb(195, 0, 0)');

    }
  }


  return (
    <div className="App">
      <header className="Header outfit-title unselectable">Beacon.
      </header>
      {/* <text className='login-item text'>Username</text> */}
      <input type='textbox' className='textbox space outfit-text' placeholder='Username'></input>
      {/* <text className='login-item text'>Password</text> */}
      <input type='password' className='textbox pw-space outfit-text' placeholder= 'Password'onChange={handleChange}></input>
      <div className='response password-space outfit-text'>{passwordResponse}</div>
      <input type='password' className='textbox pw-space outfit-text' placeholder= 'Re-enter Password'onChange={handleChangePW}></input>
      <div className='response password-space' style={{color: color}}>{password2Response}</div>
      <button className='login-item button space space-top outfit-text'>Create Account</button>
    </div>
  );


}

export default CreateAccount;
