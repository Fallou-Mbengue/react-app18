import { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart onClear={() => setCartItems([])} cartItems={cartItems} />
    </div>
  );
}

export default App;
