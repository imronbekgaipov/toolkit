import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counter/counterSlice.js";
import { useRef } from "react";
function App() {
  const inputValue = useRef();
  const form = useRef();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(+inputValue.current.value));
    form.current.reset();
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <div style={{ display: "flex", gap: "5px" }}>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <form
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
        ref={form}
        onSubmit={handleSubmit}
      >
        <input ref={inputValue} type="text" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
