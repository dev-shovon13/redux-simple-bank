import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import { deposit, withdraw } from "./state/action";

function App() {
  const [input, setInput] = useState();
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  console.log(input);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App my-5">
      <h3>Total Amount {counter}</h3>
      <input
        className="form-control w-25 mx-auto"
        type="text"
        onBlur={inputHandler}
      />
      <br />
      <button
        onClick={() => dispatch(deposit(input))}
        className="btn btn-sm btn-success mx-2"
      >
        Deposit
      </button>
      <button
        onClick={(e) => dispatch(withdraw(input))}
        className="btn btn-sm btn-danger mx-2"
      >
        Withdraw
      </button>
    </div>
  );
}

export default App;
