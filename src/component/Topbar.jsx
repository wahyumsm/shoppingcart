import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      {/* //INI KOMPONEN NAVBAR KONTEN */}
      <Navbar bg="light" expand="lg">
        <Container style={{ justifyContent: "center" }}>
          {/* judul dari aplikasi */}
          <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            {/* INI KUMPULAN LINK */}
            <Nav className="me-auto">
              {/* <Link to="/">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link> */}
              <Link to="/cart">
                <Nav.Link href="#link">Cart</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
