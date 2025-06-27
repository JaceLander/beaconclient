import { useState } from 'react';
import { checkPassword } from './LoginScripts.js';
import './App.css';

function CreateAccount() {
  const [passwordResponse, setPasswordResponse] = useState("");
  const [password2Response, setPassword2Response] = useState("");
  const [password, setPassword] = useState("");


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

    }else{
    setPassword2Response("Passwords must be the same");
    }
  }


  return (
    <div className="App">
      <header className="Header">Beacon.
      </header>
      {/* <text className='login-item text'>Username</text> */}
      <input type='textbox' className='textbox space' placeholder='username'></input>
      {/* <text className='login-item text'>Password</text> */}
      <input type='password' className='textbox pw-space' placeholder= 'password'onChange={handleChange}></input>
      <div className='response password-space'>{passwordResponse}</div>
      <input type='password' className='textbox pw-space' placeholder= 'Re-enter password'onChange={handleChangePW}></input>
      <div className='response password-space'>{password2Response}</div>
      <button className='login-item button space space-top'>Create Account</button>
    </div>
  );


}

export default CreateAccount;
