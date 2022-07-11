
// // import { Alert } from 'react-bootstrap';
// export default function ForgetPassword() {
    //     const emailRef = useRef();
//     // const [error, setError] = useState("");
//     // const [loading, setLoading] = useState(false);



import React, { useRef } from "react";
import "../style/ForgetPassword.css";
import NavBarCompWithLogin from "./NavBarCompWithLogin";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const emailRef = useRef();
    const { forgetPasswordfun } = useAuth();
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        try {
            forgetPasswordfun(emailRef.current.value);
            console.log("forget Password link is send to your email");
            navigate("/login");
        } catch (error) {
            console.log("Unknown error");
        }
    }
    return (
        <React.Fragment>
            <NavBarCompWithLogin />
            <div className="background">
                <div className="my-form2">
                    <p id="login-text">Forgot Password</p>
                    <p id="email-text">
                        Enter the email address associated with your account and we will
                        send an activation link to reset the password
                    </p>
                    <form onSubmit={handleSubmit}>
                        <br />
                        <div className="input-container">
                            <label htmlFor="name" className="form_label" >
                                Email ID
                            </label>
                            <br />
                            <input
                                placeholder="Type you email"
                                type="email"
                                className="form_field"
                                name="name"
                                id="password"
                                required
                                ref={emailRef}
                            />
                        </div>
                        <br />
                        <br />
                        <div className="button-container">
                            <input type="submit" value="Continue" id="continue" />
                        </div>
                        <br />
                        <br />
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}