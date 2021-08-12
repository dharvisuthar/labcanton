import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Footer = () => {
    return (
        <div>
            <div className="details-main-div  text-black" id="conatctus">
                <Container>
                    <Row className="padding-top-5">
                        <Col md={4} className="padding-top-5">
                            <input className="details-textbox font-14" placeholder="Email Address"></input>
                            <p className="font-14 mt-3">What can we help you with today?</p>
                            <input className="details-textbox font-14" placeholder="Enter your message here.."></input>
                            <br />
                            <button className="btn-send-msg font-14">SEND MESSAGE</button>
                        </Col>
                        <Col md={4} className="padding-top-5">
                            <p><i className="fa fa-phone mr-2 color-039be5" aria-hidden="true"></i><a link href="/" className="a-link">+91-8866531035</a></p>
                            <p><i className="fa fa-envelope mr-2 color-039be5" aria-hidden="true"></i><a link href="mailto: info@thelabcanton.com" className="a-link">info@thelabcanton.com</a></p>
                            <p><i className="fa fa-list-alt mr-2 color-039be5" aria-hidden="true"></i><a link href="https://thelabcanton.com/" className="a-link">https://thelabcanton.com/</a></p>
                            <p> <i className="fa fa-location-arrow mr-2 color-039be5" aria-hidden="true"></i><a link href="https://maps.google.com/maps?q=46615,Michigan Avenue,Canton, MI, 48188" className="a-link">46615 Michigan Avenue Canton, MI, 48188</a></p>
                        </Col>
                        <Col md={4} className="padding-top-5">
                            <p className="text-uppercase color-cadetblue">WORKING HOURS</p>
                            <p>Monday: 04:00PM - 09:00PM</p>
                            <p>Tuesday: Closed 05:00PM - 09:00PM</p>
                            <p>Wednesday: 04:00PM - 09:00PM</p>
                            <p>Thursday: 04:00PM - 07:00PM</p>
                            <p>Friday: 04:00PM - 06:00PM</p>
                            <p>Saturday: 10:00AM to 09:00PM</p>
                            <p>Sunday: 08:00AM to NOON</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={7}  className="padding-top-5"></Col>
                        <Col md={5}  className="padding-top-5">
                            <div className="float-right">
                                <span className="menu-btn-grid"><a link className="menu-btn" href="/">Home</a></span>
                                <span className="menu-btn-grid"><a link className="menu-btn" href="/">Offers</a></span>
                                <span className="menu-btn-grid"><a link className="menu-btn" href="/#ourservices">Services</a></span>
                                <span className="menu-btn-grid"><a link className="menu-btn" href="/#gallery">Gallery</a></span>
                                <span className="menu-btn-grid"><a link className="menu-btn" href="/#testimonials">Testimonials</a></span>
                                <span className="menu-btn-grid"><a link className="menu-btn" href="/#conatctus">Contact Us</a></span>
                            </div>
                        </Col>
                        <Col md={4}></Col>
                        <Col md={8}><span><a  href="https://www.referrizer.com/?aid=XNI5550&utm_source=Frontend%20Link&utm_medium=Landing%20Page%20Footer&utm_campaign=Referral%20Marketing" target="_blank"><span className="baseball-a"> Own a Business? Start your Marketing Automation for FREE</span></a></span></Col>
                    </Row>
                    <Row className="pt-3">
                        <Col md={10}></Col>
                        <Col md={2}>
                            <Row className="text-white">
                                <Col md={4} xs={2}><i className="fa fa-facebook  fa-2x" aria-hidden="true"></i></Col>
                                <Col md={4} xs={2}><i className="fa fa-twitter  fa-2x" aria-hidden="true"></i></Col>
                                <Col md={4} xs={2}><i className="fa fa-instagram  fa-2x" aria-hidden="true"></i></Col>
                            </Row>
                        </Col>
                          <Col md={12} className="pt-3">
                            <p className="text-right mb-0 baseball-p" >All rights reserved © Referrizer and The Lab. 2020</p>
                            <p className="text-right baseball-p">Powered By <a link href="https://www.zorroapps.com/" target="_blank" className="a-link-black">ZorroApps</a></p>
                          </Col>
                        </Row>
                </Container>
            </div>
        </div>
    );
}
export default Footer