import products from "./products.json";
import "./App.css";
import Product from "./Component1/Product";
import styled from "styled-components";

function App() {
  return (
    <AppFrame>
      {products.map((p, index) => (
        <Product prod={p} key={index}></Product> //hakéké te3adi params prop
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