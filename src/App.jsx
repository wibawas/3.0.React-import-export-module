import React from "react";
import PI, { doublePi, triplePi } from "./pi";
import * as value from "./square";

function App() {
  return (
    <div>
      <h1>Pi</h1>
      <ul>
        <li>{PI}</li>
        <li>{doublePi(PI)}</li>
        <li>{triplePi(PI)}</li>
      </ul>

      <hr />

      <h1>Squre</h1>
      <ul>
        <li>{value.default}</li>
        <li>{value.squareTwo(5)}</li>
        <li>{value.squareTwo(10)}</li>
      </ul>
    </div>
  );
}

export default App;
