import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Header from '../header/Header';
const BookDetails = () => {

    const [data1, setdata] = useState([])
    const user = { name: 'John' };
    let emailidd = {};
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/abc/findallbooking")
            .then(res => {
                console.log(res.data)
                setdata(res.data.data)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }, [])
    const handleDelete = (useremail) => {

        axios.delete(`http://localhost:8000/abc/deletebooking/${useremail}`)
            .then(res => {
                console.log(res.data);
                window.alert("data deleted");
                setdata(prevData => prevData.filter(item => item.useremail !== useremail));
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (

        <>
            <Header/>

            <h3 style={{ marginTop: "20px" }} className='text-center'>Booking Details </h3>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        
                            {/* <th>#</th> */}
                            <th>User Mail</th>
                            <th>User Name</th>
                            <th>Car Name</th>
                            <th>Payment</th>
                            {/* <th>Source</th>
                            <th>Destination</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data1.map((ii) => {
                                return (
                                    <>
                                        <tr>
                                            {/* <th scope="row">1</th> */}
                                            <td>{ii.usermail}</td>
                                            <td>{ii.username}</td>
                                            <td>{ii.carname}</td>
                                            <td>{ii.payment}</td>
                                            {/* <td>{ii.source}</td>
                                            <td>{ii.destination}</td> */}
                                            {/* <Link className='nav-linkss' to={"/Update"}>Home</Link> */}
                                            <td><button className='btn btn-success' onClick={(props) => {
                                                navigate('/BookUpdate');
                                                localStorage.setItem("useremail", ii.usermail);
                                            }

                                            } >Update</button><button className='btn btn-danger' onClick={(useremail) => handleDelete(ii.usermail)} >Delete</button></td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )

}

export default BookDetails
