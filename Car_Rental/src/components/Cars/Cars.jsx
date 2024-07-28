import React from 'react'
import Filter from './Fillter'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Cars.css';
import pic1 from '../Images/1.jpeg';
import pic2 from '../Images/2.jpeg';
import pic3 from '../Images/3.jpeg';
import pic4 from '../Images/4.jpeg';
import pic5 from '../Images/5.jpg';
import pic6 from '../Images/6.jpg';
import pic7 from '../Images/7.jpg';
import pic8 from '../Images/8.jpg';
import pic9 from '../Images/9.jpg';
import pic10 from '../Images/10.jpg';


import { useEffect, useState } from 'react';
import axios from 'axios';

import { FaCar } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md"
import { BsFuelPumpFill } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";
import Header1 from './Header1';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useNavigate,Navigate } from 'react-router-dom';
const Cars = () => {

  const val = localStorage.getItem("validatedUser");

  const [validated, setvalidated] = useState(false);
  useEffect(() => {
    setvalidated(val);
  })
  
  const Book = (props)=>{
    if(validated)
    {
      navigate('/BookCar');
      localStorage.setItem("carname", props);
    }
    else{
        window.alert("You need to login for Booking");
    }
    
    
  }
  const [data1, setdata1] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/abc/findallcar")
      .then(res => {
        console.log(res.data)
        setdata1(res.data.data)
      }
      )
      .catch(err => {
        console.log(err)
      }
      )
  }, []);

  const [cardst,setcardst] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Filter />
      <div className='div1' >
        <center className='text'> <p style={{ display: 'inline', marginBottom: '50wpx' }}>NOW GET CHANCE TO RIDE IN YOUR DREAM CAR</p></center>
        <Container>
          <Row>
            {
              data1.map((cc) => {
                return (
                  <>
                    <Col md={3}>
                      <Card className='des1' border={false}>
                        <Card.Img variant='top' src={pic1} />
                        <Card.Body style={{ backgroundColor: 'white' }}>
                          <div style={{top: '12px'}}>
                          <FaCar className='ic1' />
                          <p className='p1' style={{ background: "none", display: 'inline', position: 'relative',  left: '20px' }}>
                            {cc.name}
                          </p>
                          </div>
                          <br></br>

                          <div>
                          <MdAirlineSeatReclineExtra className='ic2' />
                          <p style={{ background: "none", display: 'inline', position: 'relative', left: '20px' }}>{cc.noSeats}</p>
                          </div>
                          <br></br>
                          
                          <div>
                          <BsFuelPumpFill className='ic2' />
                          <p className='p1' style={{ display: 'inline', position: 'relative', left: '20px' }}>
                            {cc.cartype}
                          </p>
                          </div>
                          <br></br>

                          <div>
                          <MdCurrencyRupee className='ic2' style={{ position: 'relative' }} />
                          <p className='p1' style={{ background: "none", display: 'inline', position: 'relative', left: '20px' }}>
                           {cc.rent}/hr
                          </p>
                          </div>
                          <br></br>

                          <div style={{ marginTop: '10px', background: "none" }}>
                            <Button variant="success" size="sm" onClick={(props) => {
                                           Book(cc.name)
                                        }

                                        }>
                              Book Now
                            </Button>
                            <Button variant="outline-secondary" size="sm" >
                              See more details of car
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                )
              })
            }


            {/* <Col md={3}>
            <Card className='des1'  border={false}>
                  <Card.Img  variant='top' src={pic1}/>
                  <Card.Body style={{backgroundColor:'white'}}>
                  <FaCar className='ic1' />
                  <p className='p1' style={{ background:"none",display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  Audi Q3
                  </p>
                  <br></br>
                  <MdAirlineSeatReclineExtra className='ic2'/>
                  <p style={{ background:"none",display:'inline', position:'relative', top:'10px', left:'20px'}}>4</p>
                  <br></br>
                  <BsFuelPumpFill className='ic2'/>
                   <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                     Petrol
                   </p>
                <br></br>
                <MdCurrencyRupee className='ic2' style={{position:'relative',top:'4px'}}/>
                <p className='p1' style={{ background:"none",display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  2000/hr
                </p>
                <br></br>
                <div style={{marginTop:'15px',background:"none"}}>
                <Button variant="success" size="sm">
                  Grab it
                </Button>{' '}
                <Button variant="outline-secondary" size="sm" >
                   See more details of car
                </Button>
                </div>
                </Card.Body> 
                </Card>
            </Col>
            <Col md={3}>
            <Card className='des1'>
                  <Card.Img  variant='top' src={pic2}/>
                  <Card.Body  style={{backgroundColor:'white'}}>
                  <FaCar className='ic1' />
                  <p className='p1' style={{ background:"none",display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  Land Rover Range Rover Sports
                  </p>
                  <br></br>
                  <MdAirlineSeatReclineExtra className='ic2'/>
                  <p style={{ background:"none",display:'inline', position:'relative', top:'10px', left:'20px'}}>4</p>
                  <br></br>
                  <BsFuelPumpFill className='ic2'/>
                   <p className='p1' style={{ background:"none",display:'inline', position:'relative', top:'12px', left:'20px'}}>
                     Petrol
                   </p>
                <br></br>
                <MdCurrencyRupee className='ic2' style={{position:'relative',top:'4px'}}/>
                <p className='p1' style={{background:"none", display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  cost per hour
                </p>
                <br></br>
                <div style={{marginTop:'15px',background:"none"}}>
                <Button variant="success" size="sm">
                  Grab it
                </Button>{' '}
                <Button variant="outline-secondary" size="sm" >
                   See more details of car
                </Button>
                </div>
                </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className='des1'>
                  <Card.Img  variant='top' src={pic3}/>
                  <Card.Body  style={{backgroundColor:'white'}}>
                  <FaCar className='ic1' />
                  <p className='p1' style={{background:"none", display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  Lexus RX
                  </p>
                  <br></br>
                  <MdAirlineSeatReclineExtra className='ic2'/>
                  <p style={{ background:"none",display:'inline', position:'relative', top:'10px', left:'20px'}}>4</p>
                  <br></br>
                  <BsFuelPumpFill className='ic2'/>
                   <p className='p1' style={{background:"none",display:'inline', position:'relative', top:'12px', left:'20px'}}>
                     fuel 
                   </p>
                <br></br>
                <MdCurrencyRupee className='ic2' style={{position:'relative',top:'4px'}}/>
                <p className='p1' style={{background:"none",display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  cost per hour
                </p>
                <br></br>
                <div style={{marginTop:'15px',background:"none"}}>
                <Button variant="success" size="sm">
                  Grab it
                </Button>{' '}
                <Button variant="outline-secondary" size="sm" >
                   See more details of car
                </Button>
                </div>
                </Card.Body>
                
                </Card>
                
                
                
            </Col>
            <Col md={3}>
                <Card className='des1'>
                  <Card.Img  variant='top' src={pic4}/>
                  <Card.Body  style={{backgroundColor:'white'}}>
                  <FaCar className='ic1' />
                  <p className='p1' style={{background:"none",display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  Car name
                  </p>
                  <br></br>
                  <MdAirlineSeatReclineExtra className='ic2'/>
                  <p style={{background:"none",display:'inline', position:'relative', top:'10px', left:'20px'}}>No of seats</p>
                  <br></br>
                  <BsFuelPumpFill className='ic2'/>
                   <p className='p1' style={{background:"none",display:'inline', position:'relative', top:'12px', left:'20px'}}>
                     fuel 
                   </p>
                <br></br>
                <MdCurrencyRupee className='ic2' style={{position:'relative',top:'4px'}}/>
                <p className='p1' style={{background:"none",display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  cost per hour
                </p>
                <br></br>
                <div style={{marginTop:'15px',background:"none"}}>
                <Button variant="success" size="sm">
                  Grab it
                </Button>{' '}
                <Button variant="outline-secondary" size="sm" >
                   See more details of car
                </Button>
                </div>
                </Card.Body> 
                </Card>  
            </Col>
            <Col md={3}>
                <Card className='des1'>
                  <Card.Img  variant='top' src={pic5}/>
                  <Card.Body  style={{backgroundColor:'white'}}>
                  <FaCar className='ic1' />
                  <p className='p1' style={{background:"none",display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  Car name
                  </p>
                  <br></br>
                  <MdAirlineSeatReclineExtra className='ic2'/>
                  <p style={{background:"none",display:'inline', position:'relative', top:'10px', left:'20px'}}>No of seats</p>
                  <br></br>
                  <BsFuelPumpFill className='ic2'/>
                   <p className='p1' style={{background:"none",display:'inline', position:'relative', top:'12px', left:'20px'}}>
                     fuel 
                   </p>
                <br></br>
                <MdCurrencyRupee className='ic2' style={{position:'relative',top:'4px'}}/>
                <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  cost per hour
                </p>
                <br></br>
                <div style={{marginTop:'15px',background:"none"}}>
                <Button variant="success" size="sm">
                  Grab it
                </Button>{' '}
                <Button variant="outline-secondary" size="sm" >
                   See more details of car
                </Button>
                </div>
                </Card.Body> 
                </Card>  
            </Col>
            <Col md={3}>
                <Card className='des1'>
                  <Card.Img  variant='top' src={pic6}/>
                  <Card.Body style={{backgroundColor:'white'}}>
                  <FaCar className='ic1' />
                  <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  Car name
                  </p>
                  <br></br>
                  <MdAirlineSeatReclineExtra className='ic2'/>
                  <p style={{display:'inline', position:'relative', top:'10px', left:'20px'}}>No of seats</p>
                  <br></br>
                  <BsFuelPumpFill className='ic2'/>
                   <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                     fuel 
                   </p>
                <br></br>
                <MdCurrencyRupee className='ic2' style={{position:'relative',top:'4px'}}/>
                <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  cost per hour
                </p>
                <br></br>
                <div style={{marginTop:'15px',background:"none"}}>
                <Button variant="success" size="sm">
                  Grab it
                </Button>{' '}
                <Button variant="outline-secondary" size="sm" >
                   See more details of car
                </Button>
                </div>
                </Card.Body> 
                </Card>  
            </Col>
            <Col md={3}>
                <Card className='des1'>
                  <Card.Img  variant='top' src={pic7}/>
                  <Card.Body  style={{backgroundColor:'white'}}>
                  <FaCar className='ic1' />
                  <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  Car name
                  </p>
                  <br></br>
                  <MdAirlineSeatReclineExtra className='ic2'/>
                  <p style={{display:'inline', position:'relative', top:'10px', left:'20px'}}>No of seats</p>
                  <br></br>
                  <BsFuelPumpFill className='ic2'/>
                   <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                     fuel 
                   </p>
                <br></br>
                <MdCurrencyRupee className='ic2' style={{position:'relative',top:'4px'}}/>
                <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  cost per hour
                </p>
                <br></br>
                <div style={{marginTop:'15px',background:"none"}}>
                <Button variant="success" size="sm">
                  Grab it
                </Button>{' '}
                <Button variant="outline-secondary" size="sm" >
                   See more details of car
                </Button>
                </div>
                </Card.Body> 
                </Card>  
            </Col>
            <Col md={3}>
                <Card className='des1'>
                  <Card.Img  variant='top' src={pic8}/>
                  <Card.Body  style={{backgroundColor:'white'}}>
                  <FaCar className='ic1' />
                  <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  Car name
                  </p>
                  <br></br>
                  <MdAirlineSeatReclineExtra className='ic2'/>
                  <p style={{display:'inline', position:'relative', top:'10px', left:'20px'}}>No of seats</p>
                  <br></br>
                  <BsFuelPumpFill className='ic2'/>
                   <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                     fuel 
                   </p>
                <br></br>
                <MdCurrencyRupee className='ic2' style={{position:'relative',top:'4px'}}/>
                <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  cost per hour
                </p>
                <br></br>
                <div style={{marginTop:'15px',background:"none"}}>
                <Button variant="success" size="sm">
                  Grab it
                </Button>{' '}
                <Button variant="outline-secondary" size="sm" >
                   See more details of car
                </Button>
                </div>
                </Card.Body> 
                </Card>  
            </Col>
            <Col md={3}>
                <Card className='des1'>
                  <Card.Img  variant='top' src={pic9}/>
                  <Card.Body  style={{backgroundColor:'white'}}>
                  <FaCar className='ic1' />
                  <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  Car name
                  </p>
                  <br></br>
                  <MdAirlineSeatReclineExtra className='ic2'/>
                  <p style={{display:'inline', position:'relative', top:'10px', left:'20px'}}>No of seats</p>
                  <br></br>
                  <BsFuelPumpFill className='ic2'/>
                   <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                     fuel 
                   </p>
                <br></br>
                <MdCurrencyRupee className='ic2' style={{position:'relative',top:'4px'}}/>
                <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  cost per hour
                </p>
                <br></br>
                <div style={{marginTop:'15px',background:"none"}}>
                <Button variant="success" size="sm">
                  Grab it
                </Button>{' '}
                <Button variant="outline-secondary" size="sm" >
                   See more details of car
                </Button>
                </div>
                </Card.Body> 
                </Card>  
            </Col>
            <Col md={3}>
                <Card className='des1'>
                  <Card.Img  variant='top' src={pic10}/>
                  <Card.Body  style={{backgroundColor:'white'}}>
                  <FaCar className='ic1' />
                  <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  Car name
                  </p>
                  <br></br>
                  <MdAirlineSeatReclineExtra className='ic2'/>
                  <p style={{display:'inline', position:'relative', top:'10px', left:'20px'}}>No of seats</p>
                  <br></br>
                  <BsFuelPumpFill className='ic2'/>
                   <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                     fuel 
                   </p>
                <br></br>
                <MdCurrencyRupee className='ic2' style={{position:'relative',top:'4px'}}/>
                <p className='p1' style={{display:'inline', position:'relative', top:'12px', left:'20px'}}>
                  cost per hour
                </p>
                <br></br>
                <div style={{marginTop:'15px',background:"none"}}>
                <Button variant="success" size="sm">
                  Grab it
                </Button>{' '}
                <Button variant="outline-secondary" size="sm" >
                   See more details of car
                </Button>
                </div>
                </Card.Body> 
                </Card>  
            </Col> */}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Cars
