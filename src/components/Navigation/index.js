import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import style from '../../CSS Modules/navbar.module.css';

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        Amsterdam Ultimate Club
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={style.nav} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/aboutus" linkText="About Us" />
          <NavbarItem path="/whatisultimate" linkText="What Is Ultimate" />
          <NavbarItem path="/cityleague" linkText="City League" />
          <NavbarItem path="/teams" linkText="Teams" />
          {token ? <NavbarItem path="/admin" linkText="Admin" /> : null}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
