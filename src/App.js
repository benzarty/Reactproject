import products from "./products.json";
import "./App.css";
import Product from "./Component1/Product";
import Home from "./Component1/Home"
import styled from "styled-components";
import ProductDetails from "./Component1/ProductDetails";

function App() {
  return (
    <AppFrame>
      <Home>
      </Home>
      {products.map((p, index) => (
        <Product prod={p} key={index}></Product> 
      ))}
    </AppFrame>
  );
}
const AppFrame = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
`;
export default App;