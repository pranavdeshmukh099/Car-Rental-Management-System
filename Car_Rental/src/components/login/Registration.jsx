import React, { useEffect } from 'react'
import './Login.css'
import { Form } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
const Registration = () => {
    const [validated, setValidated] = useState(false);
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [password, setpassword] = useState('');
    const [dob, setdob] = useState('');
    const [email, setemail] = useState('');
    const [contactno, setcontact] = useState('');
    const [gender, setgender] = useState('');
    const [address, setaddress] = useState('');
    const handleSubmit = () => {
        
        const setdata = {
            fname: fname,
            lname: lname,
            password:password,
            dob: dob,
            email: email,
            contactno: contactno,
            gender: gender,
            address: address
        }

        axios.post('http://localhost:8000/abc/register', setdata)
            .then(res => {
                console.log(res.data);
                window.alert("You are successfully registered");
            })
            .catch((err) => {
                console.log(err);
            })
            setValidated(true);
        
    }

    return (
        <>
            {/* <div style={{ margin: "auto", width: "50%", marginTop: "30px" }}>
                <h1 className='text-center'>Registration Form</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <table className='table'  >
                        <tr>
                            <td><label for="exampleInputName" class="form-label">First Name: </label></td>
                            <td><input type="text" name="fname" onChange={(e) => setfname(e.target.value)} value={fname} class="form-control" id="exampleInputName" placeholder='Enter First Name' /></td>
                        </tr>
                        <tr>
                            <td><label for="exampleInputName" class="form-label">Last Name: </label></td>
                            <td><input type="text" name="lname" onChange={(e) => setlname(e.target.value)} value={lname} class="form-control" id="exampleInputName" placeholder='Enter Last Name' /></td>
                        </tr>
                        <tr>
                            <td><label for="exampleInputName" class="form-label">DOB: </label></td>
                            <td><input type="date" name="dob" onChange={(e) => setdob(e.target.value)} value={dob} class="form-control" id="exampleInputName" placeholder='Enter DOB' /></td>
                        </tr>
                        <tr>
                            <td><label for="exampleInputName" class="form-label">Email: </label></td>
                            <td><input type="text" name="email" onChange={(e) => setemail(e.target.value)} value={email} class="form-control" id="exampleInputName" placeholder='Enter Mail' /></td>
                        </tr>
                        <tr>
                            <td><label for="exampleInputName" class="form-label">Contact Number: </label></td>
                            <td><input type="tel" name="connumber" onChange={(e) => setcontact(e.target.value)} value={contact} class="form-control" id="exampleInputName" placeholder='Enter contact no' /></td>
                        </tr>
                        <tr>
                            <td><label for="exampleInputName" class="form-label">Gender: </label></td>
                            <td><input type="text" name="gender" onChange={(e) => setgender(e.target.value)} value={gender} class="form-control" id="exampleInputName" placeholder='Gender' /></td>
                        </tr>
                        <tr>
                            <td><label for="exampleInputName" class="form-label">Address: </label></td>
                            <td>
                                <textarea name="address" onChange={(e) => setaddress(e.target.value)} value={address} class="form-control" id="" cols="30" rows="10" placeholder='Enter address here'></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td><button className='btn btn-success' type='submit' >Submit</button></td>
                        </tr>
                    </table>


                </Form>
            </div> */}

            <div >
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue=""
                                value={fname}
                                onChange={(e) => setfname(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue=""
                                value={lname}
                                onChange={(e) => setlname(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Password"
                                defaultValue=""
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>DOB</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                placeholder="DOB"
                                value={dob}
                                onChange={(e) => setdob(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Contact number"
                                value={contactno}
                                onChange={(e) => setcontact(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Gender"
                                value={gender}
                                onChange={(e) => setgender(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setaddress(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Button type="submit">Register</Button>
                </Form>
            </div>
        </>
    )
}

export default Registration
