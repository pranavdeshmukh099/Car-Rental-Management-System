import React from 'react'
import wp from '../Pic/whatsapp.png'
import inst from '../Pic/insta.png'
import call from '../Pic/call.png'
import gmaill from '../Pic/gmail.png'
import './Footer.css'
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <div class="card text-center" style={{ backgroundColor: "rgb(7, 8, 71)", borderRadius: "0%" }}>
                <div class="card-header">
                </div>
                <div class="card-body" style={{ color: "white", }}>
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <h3>Head Office</h3>
                                <p>Near, Pune - Nashik Hwy, Sangamner,<br /> Ghulewadi, Maharashtra 422608 </p>
                            </Col>
                            <Col lg={4}>
                                <h5 class="card-title">Want to know more?</h5>
                                <p class="card-text">Click Below to Contact</p>
                                <a href="#" class="btn btn-primary">Contact Us</a>
                                <br /><br />
                                <ul className="social-media-link" style={{ placeItems: 'center', display: 'Row', paddingLeft: " 20px" }}>
                                    <li><a href="https://wa.me/"><img src={wp} alt="" style={{ width: '30px' }} /></a></li>
                                    <li><a href="https://www.instagram.com"><img src={inst} alt="" style={{ width: '30px' }} /></a></li>
                                    <li><a href="tel:"><img src={call} alt="" style={{ width: '35px' }} /></a></li>
                                    <li><a href="mailto:fgh@gmail.com"><img src={gmaill} alt="" style={{ width: '30px' }} /></a></li>
                                </ul>

                            </Col>

                            <Col lg={4}>
                                <div style={{ textAlign: "left", paddingLeft: "90px" }}>
                                    <h3>Help</h3>
                                    <a href="" style={{ color: "white", textDecoration: "none" }}>help</a><br />
                                    <a href="" style={{ color: "white", textDecoration: "none" }}>Contact us</a><br />
                                    <a href="" style={{ color: "white", textDecoration: "none" }}>Any Query</a><br />
                                    <a href="" style={{ color: "white", textDecoration: "none" }}>Support</a><br />
                                    <a href="" style={{ color: "white", textDecoration: "none" }}>Troubleshooting</a><br />

                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {/* <i class="fas fa-band-aid"></i> */}

                </div>
            </div>
            <div className="foot" style={{ borderRadius: "0%" }}>
                <p>© Copyright 2023 . All Rights Reserved.    Abhinav Gadekar ,Prakash Bhabad ,Pranav Deshmukh ,Pranav Ekhande ,Parth Deshmukh</p>
                <p></p>
            </div>
        </>
    )
}

export default Footer
