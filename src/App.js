import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="tittle">Puntos por click</h1>
      <p className="parrafosuma">
        Cada click que hagas en suma te dara un punto{" "}
      </p>
      <p className="parraforesta">
        Cada click que hagas en resta te quitara un punto{" "}
      </p>
      <p className="parraforreset">Para regresar a cero da click en reset</p>
      <p className="count">llevas {count} puntos </p>
      <button onClick={() => setCount(count + 1)} className="sumar">
        suma puntos
      </button>
      <button onClick={() => setCount(count - 1)} className="restar">
        resta puntos
      </button>
      <button onClick={() => setCount(count - count)} className="reset">
        reset
      </button>
    </>
  );
}
