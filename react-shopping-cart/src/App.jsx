import { useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const handleAddToCart = (product) => {
    setShoppingCart((prevData) => [...prevData, product]);
  };

  return (
    <div>
      <Navbar shoppingCart={shoppingCart} />
      <Cards handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
