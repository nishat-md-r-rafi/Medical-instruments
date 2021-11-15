import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
function Header(props) {
  const { user, signInUsingGoogle, logOut } = useAuth();
  console.log(user.displayName);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MediEye</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            MediEye
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/pay">Pay</Nav.Link>
            <Nav.Link href="/explore">Explore</Nav.Link>

            {user?.email ? (
              <div style={{ display: "flex" }}>
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    border: "none",
                  }}
                  className="btn btn-primary"
                  onClick={logOut}
                >
                  LogOut
                </button>
                <Nav.Link href="/myOrders">DashBoard</Nav.Link>
              </div>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
            <Nav.Link className="text-md-right" href="#" disabled>
              {user.displayName}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
