import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import img1 from '../slider-img/slider-1.jpg';
// import img2 from '../slider-img/slider-2.jpg';
// import img3 from '../slider-img/slider-3.jpg';
// import carimg1 from '../cars-img/bmw-offer.png';
// import ExampleCarouselImage from '../slider-img/slider-1.jpg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowRightToBracket, faCheckDouble, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Registration from '../login/Registration';
import Login from '../login/Login';

const Header = () => {


  const val = localStorage.getItem("validatedUser");

  const [validated, setvalidated] = useState(false);
  useEffect(() => {
    setvalidated(val);
  })
  const logout = () => {
    setvalidated(false);
    // localStorage.setItem("validatedUser",false);
      localStorage.removeItem("validatedUser");
  }
  
  
  // const logout = () => setvalidated(false);

  const uname = localStorage.getItem("validatedUserName");

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


 

  return (
    <>
      <div className='head'>
        <div className='con'>
          <span>Need Help? <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;Call:321-897-232-12 </span>
        </div>
        <div className='logreg'>
          <Button variant="primary" onClick={handleShow2} style={{ background: "none", border: "none", color: "white" }}>
            <FontAwesomeIcon icon={faUser} className='head-icon' />  &nbsp;Register
          </Button>
          <Modal
            show={show2}
            onHide={handleClose2}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Registration />
            </Modal.Body>

          </Modal>
          <Button onClick={handleShow1} style={{ background: "none", border: "none", color: "white" }} >
            <FontAwesomeIcon icon={faArrowRightToBracket} />&nbsp; Login
          </Button>

          {validated && <Button onClick={()=>logout({})} style={{ background: "none", border: "none", color: "white" }} >
            <FontAwesomeIcon icon={faArrowAltCircleDown} />&nbsp; Log Out
          </Button>}


          <Modal
            show={show1}
            onHide={handleClose1}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Login />
            </Modal.Body>

          </Modal>
        </div>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Car Rental</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="">Home</Nav.Link>
              <Nav.Link href="">About</Nav.Link>
              <Nav.Link href="">Cars</Nav.Link>
              <Nav.Link href="">Blog</Nav.Link>
              <Nav.Link href="">Contact</Nav.Link> */}

              <Link className='nav-linkss' to={"/Home"}>Home</Link>
              <Link className='nav-linkss' to={"/About"}>About</Link>
              <Link className='nav-linkss' to={"/CarsPage"}>Cars</Link>
              <Link className='nav-linkss' to={"/Blog"}>Blog</Link>
              <Link className='nav-linkss' to={"/Contact"}>Contact</Link>


              {/* <Button className='con-btn'>Contact Us</Button> */}
            </Nav>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
          {/* <div class="d-flex"> */}



          {/* </div> */}
        </Container>
      </Navbar>

      {/* **************************** */}
      {/* <div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block car-img" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img2} class="d-block car-img" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block car-img" alt="..." />
            </div>
            <div className='inner-div'>
              <div className='inn-div'>
                <h5>For rent 500₹ Per Day</h5>
                <h2>Reserved Now and Get 50%</h2><br />
                <h2>Off</h2><br /><br />
                <Button>Reserve now</Button>
              </div>

            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}

      {/* <Container>
        <Row className='about-us-h'>
          <Col md={6}>
            <div>
              <h5 style={{ color: "#e3db00" }}>About Us</h5>

              <h2>Welcome to Car Rent Service</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, nihil facere unde autem dolorem a labore libero sint voluptates ad culpa consectetur maiores, quaerat hic reprehenderit ex animi doloremque aspernatur.</p>
              <table className='table' >
                <tr>
                  <td><div><FontAwesomeIcon icon={faCheckDouble} style={{ color: "#e3db00" }} /> Lorem ipsum dolor sit amet consectetur </div></td>
                  <td><div><FontAwesomeIcon icon={faCheckDouble} style={{ color: "#e3db00" }} /> Lorem ipsum dolor sit amet consectetur </div></td>
                </tr>
                <tr>
                  <td><div><FontAwesomeIcon icon={faCheckDouble} style={{ color: "#e3db00" }} /> Lorem ipsum dolor sit amet consectetur </div></td>
                  <td><div><FontAwesomeIcon icon={faCheckDouble} style={{ color: "#e3db00" }} /> Lorem ipsum dolor sit amet consectetur </div></td>

                </tr>
              </table>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <img src={carimg1} alt="" />
            </div>

          </Col>
        </Row>
      </Container> */}
      {validated && <div><center><h5>Welcome <span>{uname}</span></h5></center>  </div>}
    </>
  )
}

export default Header
