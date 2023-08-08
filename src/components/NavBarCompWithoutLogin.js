import React, { useState } from "react";
import "../style/NavbarWithoutLogin.css";
import { Navbar, Nav } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

export default function NavbarCompWithoutLogin() {
  const { logout } = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const dropItems = {
    color: "#3A69CD",
    fontSize: "1.1vw",
  };
  function imageClick() {
    navigate("/");
  }
  function handleEvent(e) {
    e.preventDefault();

    try {
      setError("");
      logout();
    } catch (e) {
      setError(e);
    }
  }
  return (
    <Navbar expand="md" className="py-3">
      <Navbar.Brand id="navbar_logo">
        <img src={require("../main_logo.png")} id="logo" onClick={imageClick} />
      </Navbar.Brand>

      <Navbar.Collapse>
        <Nav className="me-auto ms-auto my-navbar-buttons justify-content-evenly">
          <Nav.Link href="#home" style={{ color: "#3A69CD" }}>
            <Link to="/" className="link_style">
              Home
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/addNumber" className="link_style">
              Add Contect
            </Link>
          </Nav.Link>

          <Nav.Link onClick={handleEvent}>
            <Link to="/" className="link_style">
              LogOut
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
