
import './App.css'
import Home from './components/Home'
import Order from './components/OrderForm'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Auth from './components/GoogleLogin';


function App() {
    <Routes>
        <Route path="/order" element={ <Order/> } />
      </Routes>

    return(
        <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    )
}
export default App;











 {/* !!!: 
const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )


*/}