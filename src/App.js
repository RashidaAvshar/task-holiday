import { Route, Routes } from "react-router-dom";
import Headers from "./component/Headers";
import { data } from "./mockdata";
// pages
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Pages from "./pages/Pages";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Womens from "./pages/Womens";
import Home from "./pages/Home";
import Mens from "./pages/Mens";
// section
import Instagramsec from "./component/Instagramsec";
import Footer from "./component/Footer";






function App() {
  return (
    <div className="App">
      <Headers/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/womens" element={<Womens/>}/>
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/pages" element={<Pages/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Instagramsec/>
      <Footer/>
      
  
    </div>
  );
}

export default App;
