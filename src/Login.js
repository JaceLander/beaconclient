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
      <header className="Header outfit-title unselectable">Beacon.
      </header>
      <input type='textbox' className='textbox space outfit-text' placeholder='Username'></input>
      <input name='passwordText' type='password' className='textbox space outfit-text' placeholder= 'Password'onChange={handleChange}></input>
      <button className='login-item button space outfit-text' >Log In</button>
      <button className='login-item button space outfit-text small' onClick={() => navigate('/createAccount')}>Don't have an account?</button>
      <button className='login-item button space  outfit-text small'>I want to use a trial account</button>

    
    </div>
  );


}

export default Login;
