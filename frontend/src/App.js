import Navbar from "./Components/Navbar/Navbar";
import {Routes , Route, Link, Navigate, useNavigate} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCatedory from "./Pages/ShopCatedory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men from './Components/Assets/banner_mens.png'
import women from './Components/Assets/banner_women.png'
import kid from './Components/Assets/banner_kids.png'
import {BrowserRouter} from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div >
        <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Shop />}/>
      <Route path="/mens" element={<ShopCatedory banner={men} category= "men"/>}/>
      <Route path="/womens" element={<ShopCatedory banner={women} category= "women"/>}/>
      <Route path="/kids" element={<ShopCatedory banner={kid} category= "kid"/>}/>
      <Route path="/product" element={<Product />}>
        <Route path=":productId" element={<Product />}/>
      </Route>
      <Route path="/cart" element={<Cart />}/>
      {/* <Route path="/login" element={<LoginSignup/>}/> */}
      

    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
