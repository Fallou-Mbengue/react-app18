import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");
  return (
    <>
      <select
        className="form-select col-6 mx-auto"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="">Clothing</option>
        <option value="">Household</option>
      </select>
      <ProductList category={category} />
    </>
  );
}

export default App;
