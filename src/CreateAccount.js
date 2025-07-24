import { useState } from 'react';
import { checkPassword } from './LoginScripts.js';
import { AnimatePresence, motion } from 'motion/react';
import './App.css';
import axios from 'axios';
import './Login.css';
import haloBeacon from './halo beacon.png';

function CreateAccount() {
  const [passwordResponse, setPasswordResponse] = useState("");
  const [password2Response, setPassword2Response] = useState("");
  const [password, setPassword] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [color, setColor] = useState('rgb(0, 0, 0)');

  async function createUser(){
    const user = {
      username: usernameInput,
      passwordHash: password
    };
    
    await fetch("http://localhost:8080/api/user/add", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "1972",
      },
    })
    .then((response) => {
      if (!response.ok) {
        // This block is important to catch 4xx or 5xx errors
        return response.text().then(text => {
          throw new Error(`HTTP ${response.status}: ${text}`);
        });
      }
      return response.json();
    })
    .then((data) => console.log("User created:", data))
    .catch((error) => console.error("Error creating user:", error.message));

  }

  const handleChangeUserName = (e) => {
    const newUsername = e.target.value;
    setUsernameInput(newUsername);
  }

  const handleChangePW = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if(newPassword.length === 0){
    setPasswordResponse('');
    }else{
    setPasswordResponse(checkPassword(newPassword));
    }
  }

  const handleChangePW2 = (e) => {
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
    <div className="Login">
    <div className='ImageWrapper'> 
         <img className='background' src={haloBeacon} alt="Halo Beacon"/>
         <div className="InsetShadow" />
        </div>
      <header className="Header outfit-title unselectable">Beacon.
      </header>
      <div className='LoginResponseContainer'>
          <label className='login-item label'>Create Account</label>
          <input type='textbox' className='textbox space outfit-text' 
          placeholder='Username' onChange={handleChangeUserName}></input>
          <input type='password' className='textbox pw-space outfit-text' placeholder= 
          'Password'onChange={handleChangePW}></input>
          <div className='response password-space outfit-text'>{passwordResponse}</div>
          <input type='password' className='textbox pw-space outfit-text' placeholder= 
          'Re-enter Password'onChange={handleChangePW2}></input>
          <div className='response password-space' style={{color: color}}>{password2Response}</div>
          <button className='login-item button space space-top outfit-text' 
          onClick={createUser}>Create Account</button>
       </div>
       </div>
  );


}

export default CreateAccount;
