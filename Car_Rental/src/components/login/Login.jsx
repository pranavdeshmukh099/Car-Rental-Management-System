import React from 'react'
import { Link } from 'react-router-dom'
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avator from '../Images/avator.png'
import Registration from './Registration';
import { useState, useEffect } from 'react';
import { faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate,Navigate } from 'react-router-dom';
const Login = () => {

    const [valid,setvalid] = useState(false);

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const [loginusername, setloginusername] = useState('');
    const [loginpassword, setloginpassword] = useState('');

    const [unm,setunm] = useState('');
    const [upas,setupas] = useState('');

    const navigate = useNavigate();
    const handleSubmit = (loginusername) => {
    

            axios.get(`http://localhost:8000/abc/finduser/${loginusername}`)
                .then(res => {
                    console.log(res.data);
                    // setfname(res.data.fname);
                    if(res.data.email === loginusername && res.data.password === loginpassword)
                    {
                        window.alert("Login successfull");
                        localStorage.setItem("validatedUser",true);
                        localStorage.setItem("validatedUserName",res.data.fname)
                    }
                    else{
                        window.alert("username or password not matched");
                        localStorage.setItem("validatedUser",false);

                    }
                }
                )
                .catch(err => {
                    console.log(err);
                }
                )
      

    }
        return (
            <>

                <form className='lform' onSubmit={()=>handleSubmit(loginusername)}>
                    <div></div>
                    <div class="imgcontainer">
                        <img src={avator} alt="Avatar" class="avatar" />
                    </div>

                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" onChange={(e) => setloginusername(e.target.value)} />
                        <div>
                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" onChange={(e) => setloginpassword(e.target.value)} oninvalid="setCustomValidity('Please enter at least one capital letter ,one small letter ,one symbol and at least 8 characters.')" />

                            <button type="submit" >Login</button>
                            <label>
                                <input type="checkbox" checked="checked" name="remember" /> Remember me
                            </label>
                        </div>

                        <div class="container" style={{ backgroundColor: "#f1f1f1" }}>
                            <button type="submit" class="cancelbtn">Cancel</button>
                            <span class="psw">Forgot <a href="#">password?</a></span>
                        </div>

                    </div>
                </form>

            </>
        )
    }

    export default Login
