import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';



ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="751135075295-jitl9lvdfgmc8q4ptue8olrrn3h0qpqr.apps.googleusercontent.com">
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
  </GoogleOAuthProvider>,

)
