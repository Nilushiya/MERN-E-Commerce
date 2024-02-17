import Navbar from "./Components/Navbar/Navbar";
import {Routes , Route, Link, Navigate, useNavigate} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCatedory from "./Pages/ShopCatedory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div >
      <Navbar />
    <Routes>
      <Route path="/" element={<Shop />}/>
      <Route path="/mens" element={<ShopCatedory category = "mens"/>}/>
      <Route path="/womens" element={<ShopCatedory category = "womens"/>}/>
      <Route path="/kids" element={<ShopCatedory category = "kids"/>}/>
      <Route path="/product" element={<Product />}>
        <Route path=":productId" element={<Product />}/>
      </Route>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginSignup/>}/>
      

    </Routes>
    <Footer />
    </div>
  );
}

export default App;
