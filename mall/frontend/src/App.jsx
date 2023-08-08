import { BrowserRouter , Routes, Route } from "react-router-dom";
import './assets/css/reset.css'
import './assets/css/common.css'
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Logout from "./pages/Logout";
 
const App = () => {
  return (
    <BrowserRouter>    
      <Routes >
          <Route path="/" element={ <Layout />} >
              <Route index element={ <Home /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/join" element={ <Join /> } />
              <Route path="/logout" element={ <Logout /> } />
              <Route index path="/cart" element={ <Cart /> } />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
