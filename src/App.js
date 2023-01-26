// Hooks
import { useState, useReducer } from "react";

//Styles
import "./App.css";

// Components
import Button from "./Button";

// Reducer Function

const counterReducer = (state, action) => {};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState();

  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const enterNumber = (event) => {
    setNumber(event.target.value);
  };

  const addNumber = (event) => {
    event.preventDefault();
    setCounter(counter + +number);
    setNumber(0);
  };
  return (
    <div className="container">
      <div className="counter">
        <button onClick={decrement}>-</button>
        <p>{counter}</p>
        <button onClick={increment}>+</button>
      </div>
      <Button onClick={reset}>Reset</Button>
      <form onSubmit={addNumber}>
        <input
          value={number}
          onChange={enterNumber}
          type="number"
          placeholder="Type any number"
        />
        <Button onClick={addNumber}>Add</Button>
      </form>
    </div>
  );
};

export default App;
