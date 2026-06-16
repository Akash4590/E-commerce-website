import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact"
import Wishlist from "./Pages/Wishlist";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path ="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path = "/Wishlist" element={<Wishlist/>}/>
      <Route path="/productDetails/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;