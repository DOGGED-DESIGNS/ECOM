import { useContext } from "react";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Cat from "./pages/Categorypage/Categorypage";
import { Context } from "./context/Generalprovider";

const App = () => {
  const test = useContext(Context);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="category/:id" element={<Cat />} />
            <Route path="product/:id" element={<Product />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
