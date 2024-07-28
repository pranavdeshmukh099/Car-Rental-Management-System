import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarDetails from '../carDetails/CarDetails'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        {/* <img
                            alt=""
                            src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '} */}
                        <FontAwesomeIcon icon={faCar} width="30"
                            height="30"
                            className="d-inline-block" />&nbsp;&nbsp;&nbsp;
                        Car Rental
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            
                            <Link className='nav-link' to={"/Admin"}>Home</Link>
                            <Link className='nav-link' to={"/ViewUsers"}>View Customers</Link>
                            <Link className='nav-link' to={"/BookDetails"}>View Bookings</Link>
                            <Link className='nav-link' to={"/ViewAdmins"}>View Admins</Link>
                            <Link className='nav-link' to={"/findallcontact"}>ContactsUs</Link>
                            

                            {/* <NavDropdown title="Car Details" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Add Cars</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    View Cars 
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Update
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                        <Button style={{ marginLeft: "30px" }}>Log Out</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
