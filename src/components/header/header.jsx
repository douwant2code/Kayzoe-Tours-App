import React, { useEffect, useState } from "react";

import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../header/header.css";
import CompanyLogo from "../../assets/images/logo/kayzoe-logo.png";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  // sticky Header
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 120
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const closeMenu = () => {
    if (window.innerWidth <= 991) {
      setOpen(false);
    }
  };

  return (
    <header className="header-section">
      <Container>
        <Navbar expand="lg" className="p-0">
          {/* Logo Section  */}
          <Navbar.Brand>
            <NavLink to="/">
              <img src={CompanyLogo} alt="logo" className="comp-logo" />
            </NavLink>
          </Navbar.Brand>
          {/* End Logo Section  */}

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            {/*mobile Logo Section  */}
            <Offcanvas.Header>
              <img src={CompanyLogo} alt="logo" className="comp-logo d-none" />
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>
            {/*end mobile Logo Section  */}

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/" onClick={closeMenu}>
                  HOME
                </NavLink>

                <NavLink className="nav-link" to="tours" onClick={closeMenu}>
                  TOURS
                </NavLink>

                <NavLink
                  className="nav-link text-dark"
                  to="destinations"
                  onClick={closeMenu}
                >
                  DESTINATIONS
                </NavLink>
                <NavLink
                  className="nav-link text-dark"
                  to="/packages"
                  onClick={closeMenu}
                >
                  PACKAGES
                </NavLink>

                <NavLink
                  className="nav-link"
                  to="photo-galleries"
                  onClick={closeMenu}
                >
                  GALLERY
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="ms-md-4 ms-2">
            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i
                className={open ? "bi bi-x-lg" : "bi bi-list"}
                onClick={toggleMenu}
              ></i>
            </li>
          </div>
        </Navbar>
      </Container>
    </header>
  );
};
