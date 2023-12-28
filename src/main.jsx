import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';



ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="">
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
  </GoogleOAuthProvider>,

)
