import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Favs from "./pages/Favs"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Dashbord from "./pages/Dashbord"
import ViewProduct from "./pages/ViewProduct"
import footer from "./components/FooterCount";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsContext } from "./ProductsContext";
import FooterCount from "./components/FooterCount";

function App() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    console.log('apo thirrna')
    axios.get('https://fakestoreapi.com/products', {
      params: { limit: 10 }
    })
      .then(resp => {
        console.log(resp.data)
        setProducts(resp.data)
        console.log({products})
      }
      )
      .catch(e => console.log(e))
  }, [])
  return (
    <BrowserRouter>
      <Nav />
      <ProductsContext.Provider value={products}>
      <Routes>
        <Route path="/" exact element={<Home  />} />
        <Route path="/favorites" exact element={<Favs />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/dashbord" exact element={<Dashbord />} />
        <Route path="/product/:id" exact element={<ViewProduct />} />
      </Routes>
      </ProductsContext.Provider>
     <FooterCount/>
    </BrowserRouter>
  );
}

export default App;
