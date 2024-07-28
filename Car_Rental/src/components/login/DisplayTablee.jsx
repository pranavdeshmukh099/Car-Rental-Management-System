import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Navigate, Routes, useNavigate } from 'react-router-dom'
import Updating from './Updating'
import { Route } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const DisplayTablee = () => {

    const [data1, setdata] = useState([])
    const user = { name: 'John' };
    let emailidd = {};
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/abc/findall")
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
    const handleDelete = (email) => {

        axios.delete(`http://localhost:8000/abc/delete/${email}`)
            .then(res => {
                console.log(res.data);
                window.alert("data deleted");
                setdata(prevData=>prevData.filter(item=>item.email!==email));
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div>
            


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                        <th>Email</th>
                        <th>ContactNo</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data1.map((ii) => {
                            return (
                                <>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{ii.fname}</td>
                                        <td>{ii.lname}</td>
                                        <td>{ii.dob}</td>
                                        <td>{ii.email}</td>
                                        <td>{ii.contactno}</td>
                                        <td>{ii.gender}</td>
                                        <td>{ii.address}</td>
                                        {/* <Link className='nav-linkss' to={"/Update"}>Home</Link> */}
                                        <td><button className='btn' onClick={(props) => {
                                            navigate('/Update');
                                            localStorage.setItem("useremail",ii.email);
                                        }

                                        } >Update</button></td>
                                        <td><button className='btn' onClick={() => handleDelete(ii.email)} >Delete</button></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )

}

// const DisplayTablee = () => {
//   return (
//     <div>

//     </div>
//   )
// }


export default DisplayTablee
