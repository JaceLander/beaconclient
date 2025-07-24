import { useState } from 'react';
import { checkPassword, checkUsername} from './LoginScripts.js';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import './Login.css';
import haloBeacon from './halo beacon.png';

function Login() {
  const [passwordResponse, setPasswordResponse] = useState("");
  const [users, setUsers] = useState ("");
  const [usernameInput, setUsernameInput] = useState("");
  const [usernameInputResponse, setUsernameInputResponse] = useState("");
  const [password, setPassword] = useState("");

  let loginResponse;

  const navigate = useNavigate();



async function checkUserPassword(){
  const login = {
    username: usernameInput,
    password: password
  };
  
  fetch("http://localhost:8080/api/user/login", {
    method: "POST",
    body: JSON.stringify(login),
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
    loginResponse = response.json();

  })
  .then((data) => console.log("User sucessfully logged in:", data))
  .catch((error) => console.error("Error verifying:", error.message));

  alert(loginResponse);

}




  const handlePWChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if(newPassword.length === 0){
      setPasswordResponse('');
    } else 
    {
      setPasswordResponse(checkPassword(newPassword));
    }
  }

  const handleUNChange = (e) => {
    const newUsernameInput = e.target.value;
    setUsernameInput(newUsernameInput)
  }

  function handleLoginClick(){
    checkUserPassword();
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
            <label className='login-item label'>Sign in</label>
            <input type='textbox'  className='textbox space outfit-text' placeholder='Username' onChange={handleUNChange}></input>
            <input name='textbox' type='password' className='textbox space outfit-text' placeholder= 'Password' onChange={handlePWChange}></input>
            <button className='buttons login-item button space' style={{backgroundColor:"rgba(255, 255, 255, 1)"}} onClick={checkUserPassword}>Log In</button>
            <button className='buttons login-item button space' style={{backgroundColor:"rgba(89, 89, 89, .55)"}} onClick={() => navigate('/createAccount')}>Don't have an account?</button>
            <button className='buttons login-item button space' style={{marginTop:'15px', marginBottom:'0px'}}>Log In As Guest</button>
          </div>
          </div>
  );


}

export default Login;
