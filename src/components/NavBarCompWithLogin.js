import React, { } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "../style/NavbarWithLogin.css";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Image from "react-bootstrap/Image";
// import "../Gloria-logo.png";
import { useAuth } from '../contexts/AuthContext'

export default function NavbarCompWithLogin() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  function imageClick() {
    navigate('/');
  }
  return (
    <Navbar expand="md" className="py-3">
      <Navbar.Brand id="navbar_logo">
        <img src={require("../main_logo.png")} id="logo" onClick={imageClick} />
      </Navbar.Brand>
      <Navbar.Toggle class="toggle-burger" />
      <Navbar.Collapse>
        <Nav className="me-auto ms-auto my-navbar-buttons justify-content-evenly">
          <Nav.Link style={{ color: "#3A69CD" }}>
            <Link to='/' className="link_style">Home</Link>
          </Nav.Link>
          <Nav.Link style={{ color: "#3A69CD" }}>
            <Link to='/login' className="link_style">LogIn</Link>
          </Nav.Link>
          <Nav.Link href="#home" style={{ color: "#3A69CD" }}>
            <Link to="/login" className="link_style">Add Contect</Link>
          </Nav.Link>
          {/* <Nav.Link href="#home" style={{ color: "#3A69CD" }}>
            About Us
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}