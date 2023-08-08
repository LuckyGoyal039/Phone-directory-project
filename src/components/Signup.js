import NavBarCompWithLogin from "./NavBarCompWithLogin";
import { useAuth } from "../contexts/AuthContext";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "../style/Signup.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords Must be same");
    }
    try {
      setError("");
      setLoading(true);
      const user = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );

      navigate("/");
      emailRef.current.value = "";
      passwordRef.current.value = "";
      passwordConfirmRef.current.value = "";
    } catch (e) {
      navigate("/signup");
      setError("Something Went wrong");
      passwordRef.current.value = "";
      passwordConfirmRef.current.value = "";
    }
    setLoading(false);
  }
  return (
    <React.Fragment>
      {error && <Alert varient="danger">{error}</Alert>}
      <NavBarCompWithLogin />
      <div className="background">
        <div className="my-form1">
          <p id="login-text">Register</p>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="name" className="form__label">
                Email ID
              </label>
              <br />
              <input
                placeholder="💌   Type you email"
                type="input"
                className="form__field"
                name="name"
                id="name"
                required
                ref={emailRef}
              />
            </div>
            <br />
            <div className="input-container">
              <label htmlFor="name" className="form__label">
                Password
              </label>
              <br />
              <input
                placeholder="🔑   Type you password"
                type="password"
                className="form__field"
                name="name"
                id="password"
                required
                ref={passwordRef}
              />
            </div>
            <br />
            <div className="input-container">
              <label htmlFor="name" className="form__label">
                Confirm Password
              </label>
              <br />
              <input
                placeholder="🔑   Type you password"
                type="password"
                className="form__field"
                name="name"
                id="password"
                required
                ref={passwordConfirmRef}
              />
            </div>
            <div className="button-container">
              <button
                className="btn login_button"
                type="submit"
                disabled={loading}
              >
                SUBMIT
              </button>
            </div>
          </form>
          <p style={{ color: "black" }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
