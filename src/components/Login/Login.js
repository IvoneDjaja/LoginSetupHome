import "./Login.css";
import { useState } from "react";
import { loginWithEmailAndPassword } from "../../firebase.js";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = () => {
    loginWithEmailAndPassword(email, password);
  };

  return (
    <div className="login">
      <h1 className="text">Login</h1>
      <p>
        <input
          value={email}
          onChange={emailHandler}
          placeholder="E-mail Address"
        ></input>
      </p>
      <p>
        <input
          type="password"
          value={password}
          onChange={passwordHandler}
          placeholder="Password"
        ></input>
      </p>
      <p>
        <input type="button" value="Login" onClick={loginHandler}></input>
      </p>
      <p>
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
