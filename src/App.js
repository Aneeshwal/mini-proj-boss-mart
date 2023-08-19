import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./topheader";
import NavBar from "./navbar";
import Footer from "./footer";
import WishListPage from "./pages/wishList";
import CartListPage from "./pages/cartList";
import CurrentProductPage from "./pages/currentProduct";
import Home from "./pages/home";
import React, { useState } from "react";
import Register from "./register";
import Login from "./login";
import Create from "./Create";
function App() {
  
  const [quantity, setQuantity] = useState(0);

  //And note that we use : to signify a variable in the URL, just like we do in CurrentProductPage component path.

  return (
    <Router>
      <div id="App">
        <TopHeader />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path="/wishList" element={<WishListPage />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route
            path="/shoppingCart"
            element={<CartListPage qVal={quantity} setqVal={setQuantity} />}
          ></Route>
          <Route path="/product/:id" element={<CurrentProductPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
