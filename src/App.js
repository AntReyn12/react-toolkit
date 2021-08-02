import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, test} from "./redux/CounterSlice";
import "./App.css";

const App = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>The count is: {count}</h1>
        <div style={{display: "flex"}}>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(test({testValue: 55}))}>Test</button>
        </div>
      </header>
    </div>
  );
};

export default App;
