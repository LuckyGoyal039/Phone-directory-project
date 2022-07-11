import "../style/comman/Login.css";
import NavBarCompWithLogin from "./NavBarCompWithLogin";
import { BsGoogle } from "react-icons/bs";
import { useAuth } from "../contexts/AuthContext";
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login, logInWithGoogle } = useAuth();

    
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            emailRef.current.value = "";
            passwordRef.current.value = "";
            navigate('/');
        } catch (e) {
            setError("Incorrect email or password");
            passwordRef.current.value = "";
        }
        setLoading(false);
    }

    function googlelogin() {
        try {
            setLoading(true);
            setError("");
            logInWithGoogle();
            navigate('/');
        } catch (error) {
            setError(error);
            console.log(error);
        }
        setLoading(false);
    }
    return (
        <React.Fragment>
            {error && <Alert varient="danger">{error}</Alert>}
            <NavBarCompWithLogin />
            <div className="background"> 
                <div className="my-form1">
                    <p id="login-text">Login</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label htmlFor="name" class="form__label">
                                Email ID
                            </label>
                            <br />
                            <input
                                placeholder="💌   Type you email"
                                type="input"
                                class="form__field"
                                name="name"
                                id="name"
                                required
                                ref={emailRef}
                            />
                        </div>
                        <br />
                        <div className="input-container">
                            <label htmlFor="name" class="form__label">
                                Password
                            </label>
                            <br />
                            <input
                                placeholder="🔑   Type you password"
                                type="password"
                                class="form__field"
                                name="name"
                                id="password"
                                required
                                ref={passwordRef}
                            />
                        </div>
                        <Link to='/forgetpassword' id="forgot-password">Forgot Password?</Link>
                        <br />
                        <div className="button-container">
                            <input type="submit" value="Login" id="login_button" disabled={loading} />
                        </div>
                    </form>
                    <br />
                    <p class="continue">Or continue with</p>
                    <span style={{ display: "block" }}>
                        <BsGoogle alt="google" className="temp" size={30} onClick={googlelogin} />
                    </span>
                    <p>Create a new Account? <Link to='/signup'>Register</Link></p>
                </div>
            </div>
        </React.Fragment>
    );
}
