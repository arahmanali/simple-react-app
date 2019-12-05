import * as React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [count, setCount] = React.useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h6>This is the title</h6>
      <p>{count}</p>
      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
};

export default App;
