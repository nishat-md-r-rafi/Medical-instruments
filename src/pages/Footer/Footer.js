import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
function Footer(props) {
  return (
    <div>
      <div>
        <Box>
          <h1
            style={{
              color: "lightBlue",
              textAlign: "center",
              marginTop: "-50px",
            }}
          >
            Susrusha
          </h1>
          <Container>
            <Row>
              <Column>
                <Heading>Contact Us</Heading>
                <h4>Mobile:</h4>
                <span>0178946474</span>
                <h4>Email:</h4>
                <span>susrusha@nomail.com</span>
              </Column>

              <Column>
                <Heading>About Us</Heading>
                <FooterLink href="#">Aim</FooterLink>
                <FooterLink href="#">Vision</FooterLink>
              </Column>

              <Column>
                <Heading>Social Media</Heading>
                <FooterLink href="#">
                  <i className="fab fa-facebook-f">
                    <span style={{ marginLeft: "10px" }}>Facebook</span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-instagram">
                    <span style={{ marginLeft: "10px" }}>Instagram</span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-twitter">
                    <span style={{ marginLeft: "10px" }}>Twitter</span>
                  </i>
                </FooterLink>
                <FooterLink href="#">
                  <i className="fab fa-youtube">
                    <span style={{ marginLeft: "10px" }}>Youtube</span>
                  </i>
                </FooterLink>
              </Column>
            </Row>
          </Container>
        </Box>
      </div>
    </div>
  );
}

export default Footer;
