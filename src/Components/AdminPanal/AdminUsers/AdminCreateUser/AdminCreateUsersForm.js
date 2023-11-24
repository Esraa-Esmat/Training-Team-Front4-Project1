import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../Global/Footer/Footer";
import { useDispatch } from "react-redux";

const AdminCreateUsersForm = () => {

    // all state variables
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [status, setstatus] = useState('');
    const [email, setemail] = useState('');
    const [role, setrole] = useState('');
    const [mobileNum, setmobileNum] = useState('');
    const [userId, setuserId] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    // handle state changes
    const handlefirstName = (event) => {
      setfirstName(event.target.value);
    };
    const handlelastName = (event) => {
      setlastName(event.target.value);
    };
    const handlestatus = (event) => {
      setstatus(event.target.value);
    };
    const handleEmail = (event) => {
      setemail(event.target.value);
    };
    const handlerole = (event) => {
      setrole(event.target.value);
    };
    const handleMobileNum = (event) => {
      setmobileNum(event.target.value);
    };
    const handleUserId = (event) => {
      setuserId(event.target.value);
    };
    const handlePassword = (event) => {
      setpassword(event.target.value);
    };
    const handleConfirmPassword = (event) => {
      setconfirmPassword(event.target.value);
    };
  
    // handle user submission
    const handlesubmit = (e) => {
      e.preventDefault();
      if (
        firstName &
        lastName &
        email &
        password &
        confirmPassword &
        mobileNum &
        status &
        userId &
        (role === '')
      ) {
        //alert("Please fill in all fields");
      } else if (password === confirmPassword) {
        const userData = new FormData();
        userData.append('firstName', firstName);
        userData.append('lastName', lastName);
        userData.append('status', status);
        userData.append('email', email);
        userData.append('role', role);
        userData.append('mobileNum', mobileNum);
        userData.append('userId', userId);
        userData.append('password', password);
        userData.append('confirmPassword', confirmPassword);
        console.log(userData);
      } else {
        //alert("Passwords do not match");
      }
    };
  return (
    <>

        <div className="row">
          <div className=" col-9">

            <div className="row mt-5 ms-4">
              <Form className="text-white text-capitalize row">
                <Form.Group className="mb-3 col-md-4" controlId="formFirstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control className="bgGray border-0 rounded px-2" type="text" />
                </Form.Group>

                <Form.Group className="mb-3 col-md-4" controlId="formLastname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control className="bgGray border-0 rounded" type="text" />
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                  <Form.Label>Status</Form.Label>
                  <Form.Select style={{ height: "37px" }} className="rounded content1 border-0 text-white" aria-label="select example">
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3 col-md-8" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" className="rounded bgGray border-0 text-white" />
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                  <Form.Label>Role</Form.Label>
                  <Form.Select style={{ height: "37px" }} className="rounded content1 border-0 text-white" aria-label="select example">
                    <option value="1">Student</option>
                    <option value="2">Admin</option>
                    <option value="3">Instructor</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3 col-md-6" controlId="exampleForm.ControlInput1">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" className="rounded bgGray border-0 text-white" />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="exampleForm.ControlInput1">
                  <Form.Label>User ID</Form.Label>
                  <Form.Control type="text" className="rounded bgGray border-0 text-white" />
                </Form.Group>

                <Form.Group className="mb-3 col-md-6" controlId="exampleForm.ControlInput1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" className="rounded bgGray border-0 text-white" />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6" controlId="exampleForm.ControlInput1">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type="password" className="rounded bgGray border-0 text-white" />
                </Form.Group>

                <Form.Group className="mb-5 col-md-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Score</Form.Label>
                  <Form.Control type="text" className="rounded bgGray border-0 text-white" />
                </Form.Group>

                <div class="container-sm  mt-5 d-flex justify-content-end ms-3">
                  <Link type="button" class=" btn  bg-secondary rounded-1 text-white me-4" href="#"
                    style={{ opacity: "0.8", width: "120px" }}>CANCEL</Link>
                  <Link type="button" class=" btn btn-primary rounded-1 text-white " to="#"
                    style={{ width: "120px" }}>SAVE</Link>

                </div>


              </Form>
            </div>
          </div>
        </div>


      <Footer />
    </>
  )
}
export default AdminCreateUsersForm


