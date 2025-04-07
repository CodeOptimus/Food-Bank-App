import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { LoginPopup } from "./components/LoginPopup/LoginPopup";
import StoreContextProvider from "./context/StoreContext";
import ThemeContextProvider from "./context/ThemeContext";
import "./styles/theme.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <ThemeContextProvider>
      <StoreContextProvider>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

        <div className="app">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/place-order" element={<PlaceOrder />} />
          </Routes>
        </div>
        <Footer />
      </StoreContextProvider>
    </ThemeContextProvider>
  );
}

export default App;