import React, { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import Header from '../header/Header';

const CarAdd = () => {
    const [validated, setValidated] = useState(false);
    const [name, setname] = useState('');
    const [model, setmodel] = useState('');
    const [cartype, setcartype] = useState('');
    // const [carmodel, setcarmodel] = useState('');
    const [rent, setrent] = useState('');
    const [fuel, setfuel] = useState('');
    const [price, setprice] = useState('');
    const [noSeats, setnoSeats] = useState('');

    const handleSubmit = () => {

        const setdata = {

            name: name,
            model: model,
            cartype: cartype,
            rent: rent,
            fuel: fuel,
            price: price,
            noSeats: noSeats,
        }

        axios.post('http://localhost:8000/abc/postcar', setdata)
            .then(res => {
                console.log(res.data);
                window.alert("Car data added");
            })
            .catch((err) => {
                console.log(err);
            })
        setValidated(true);

    }
    return (
        <>
            <div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Container>

                        <Row>
                            <Col lg={6}>
                                <Form.Label>Carname</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter carname"
                                    onChange={(e) => { setname(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Model</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Model"
                                    onChange={(e) => { setmodel(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>car type</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter CarType"
                                    onChange={(e) => { setcartype(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Rent</Form.Label>
                                <Form.Control
                                    required
                                    type="Number"
                                    placeholder="Enter Rent"
                                    onChange={(e) => { setrent(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Fuel</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Fuel"
                                    onChange={(e) => { setfuel(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Enter Price"
                                    onChange={(e) => { setprice(e.target.value) }}
                                />
                            </Col>
                            <Col lg={6}>
                                <Form.Label>No Of seat</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="EnterNO of seat"
                                    
                                    onChange={(e) => { setnoSeats(e.target.value) }}
                                />
                            </Col>
                        </Row>

                    </Container>
                    <Form.Group className="mb-3">
                        <Form.Check style={{ marginLeft: "70px" }}
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit" style={{ marginLeft: "50px" }}>Add</Button>
                </Form>
            </div >

        </>
    )
}

export default CarAdd
