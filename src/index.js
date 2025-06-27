import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
//import App from './Login';
import reportWebVitals from './reportWebVitals';
import Login from "./Login";
import CreateAccount from "./CreateAccount";

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&family=Outfit:wght@100..900&display=swap');
      </style>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
