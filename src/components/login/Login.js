import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />

          <button className="login__signInButton">Sign in</button>
        </form>
        <p>
          By signing in you agree to Amazon fake clone conditions of Use & sale.
          Please see our privacy notice, our cookies notice and our interest
          based Ads
        </p>
        <button className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
