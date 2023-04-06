import { useState } from "react";
import Cart from "./components/Cart";
import Form from "./components/Form";
import NavBar from "./components/NavBar";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  return <Form />;
}

export default App;
