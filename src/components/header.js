import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Navbar, Image, Container, Row, Col } from "react-bootstrap";
import logo from "../images/img/logo_labcanton.png";
const Header = () => {

  return (
    <div className="navbar-header">
      <Container>
        <Row >
          <Col md={2} xs={12} sm={12}>
            <Navbar.Brand href="/"><Image src={logo} className="h-60"></Image></Navbar.Brand>
          </Col>
          <Col md={10} xs={12} sm={12} className="pt-3">
            <Row className="float-right">
              <a href="/" className="m-3 menu-btn">Home</a>
              <a href="/" className="m-3 menu-btn">Offers</a>
              <a href="/#ourservices" className="m-3 menu-btn">Services</a>
              <a href="/#gallery" className="m-3 menu-btn">Gallery</a>
              <a href="/#testimonials" className="m-3 menu-btn">Testimonials</a>
              <a href="/#conatctus" className="m-3 menu-btn">Contact Us</a>
            </Row>
          </Col>
        </Row>

      </Container>
      <MessengerCustomerChat
        pageId="113541194290516"
        appId="4673071056143403"
      />
    </div>
  );
}
export default Header