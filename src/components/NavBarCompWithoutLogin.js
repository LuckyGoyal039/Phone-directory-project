import React, { useState } from "react";
import "../style/Navbar.css";
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import "../Gloria-logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { GoPerson, GoPencil } from "react-icons/go";
import { VscAccount, VscGear, VscSettingsGear } from "react-icons/vsc";
import { useAuth } from '../contexts/AuthContext';

export default function NavbarCompWithoutLogin() {

  const { logout, } = useAuth();
  const [error, setError] = useState();
  const navigate=useNavigate();
  const dropItems = {
    color: "#3A69CD",
    fontSize: "1.1vw"
  }
  function handleEvent(e) {
    e.preventDefault();

    try {
      setError("");
      logout();
      navigate('/');
    } catch (e) {
      setError(e);
    }
  }
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
          {/* <Nav.Link style={{ color: "#3A69CD" }}>
            <Link to='/'>Search</Link>
          </Nav.Link> */}
          <Nav.Link href="#home" style={{ color: "#3A69CD" }}>
            <Link to="/addNumber">Add Contect</Link>
          </Nav.Link>
          <Nav.Link href="#home" style={{ color: "#3A69CD" }}>
            About Us
          </Nav.Link>
          <Dropdown className="e-caret-hide">
            <Dropdown.Toggle variant="light" id="dropdown-basic" className="e-caret-hide">
              <GoPerson style={{ color: "#3A69CD" }} />
              {/* <VscAccount style={{ color: "blue" }}/> */}
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              <Dropdown.Item href="#/action-1" style={dropItems}>Settings <VscSettingsGear style={{ color: "black" }} /></Dropdown.Item>
              <Dropdown.Item href="#/action-2" style={dropItems}>Update profile <GoPencil /></Dropdown.Item>
              <Dropdown.Item href="#/action-3" style={dropItems}>Dark Mode
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4" style={dropItems} onClick={handleEvent}>LogOut</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}