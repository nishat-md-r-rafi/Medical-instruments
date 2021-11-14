import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
function Header(props) {
  const { user, signInUsingGoogle, logOut } = useAuth();
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
            <Nav.Link href="/myOrders">MyOrders</Nav.Link>
            <Nav.Link href="/pay">Pay</Nav.Link>

            {user?.email ? (
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
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
