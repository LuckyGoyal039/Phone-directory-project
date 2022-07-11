import React, {} from "react";
import { Link } from 'react-router-dom';
import "../style/Navbar.css";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Image from "react-bootstrap/Image";
import "../Gloria-logo.png";
import {useAuth} from '../contexts/AuthContext'

export default function NavbarCompWithLogin(){
  const {currentUser} =useAuth();
    return (
      <Navbar expand="md" className="py-3">
        <Navbar.Brand id="navbar-brand">
          <img src={require("../Gloria-logo.png")} id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle class="toggle-burger" />
        <Navbar.Collapse>
          <Nav className="me-auto ms-auto my-navbar-buttons justify-content-evenly">
            <Nav.Link style={{ color: "#3A69CD" }}>
            <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link style={{ color: "#3A69CD" }} id="active">
            <Link to='/login'>Sign In</Link>
            </Nav.Link>
            {/* <Nav.Link href="#home" style={{ color: "#3A69CD" }}>
              Search
            </Nav.Link> */}
            <Nav.Link href="#home" style={{ color: "#3A69CD" }}>
                <Link to="/login">Add Contect</Link>
            </Nav.Link>
            <Nav.Link href="#home" style={{ color: "#3A69CD" }}>
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }