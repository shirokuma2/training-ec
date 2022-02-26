import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "./reduccks/users/actions";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector);

  const userInfo = { uid: "02", username: "hi" };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={() => dispatch(signInAction(userInfo))}>
          Sign in
        </button>
      </header>
    </div>
  );
}

export default App;
