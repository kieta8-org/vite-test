import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsa
      consectetur accusamus, ipsum aliquid accusantium commodi est saepe
      laborum, ipsam magni, deleniti in earum explicabo deserunt qui officia
      maiores ut.
    </>
  );
}

export default App;
