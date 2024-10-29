import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import ProductContext from "./Context/ProductContext";
import { useEffect, useState } from "react";
import ViewProduct from "./Pages/ViewProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [allPrice, setAllPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  const values = {products, setProducts, allPrice, setAllPrice, total, setTotal}

  return(
    <div className="app">
      <ProductContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/product/:id" element={<ViewProduct />}/>
        </Routes>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
