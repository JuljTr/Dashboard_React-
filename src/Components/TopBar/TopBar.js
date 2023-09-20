import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import { FiMoon } from "react-icons/fi";
// import { AiOutlineBell } from "react-icons/ai";
// import { PiGearSixBold } from "react-icons/pi";
// import { BsPerson } from "react-icons/bs";

function TopBar() {
    return (
        <>
            <Navbar expand="lg" className="">
                <Container fluid>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="me-auto ">
                        <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
                        <Nav.Link href="#features" className='text-light'>Features</Nav.Link>
                        <Nav.Link href="#pricing" className='text-light'>Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div> <h1 className='text-light'>DASHBOARD</h1>
                <p className='text-light'>Welcome to your dashboard</p>
            </div>
            <div class="container text-center text-light">
                <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div class="col">
                        <div class="p-3">Row column</div>
                    </div>
                    <div class="col">
                        <div class="p-3">Row column</div>
                    </div>
                    <div class="col">
                        <div class="p-3">Row column</div>
                    </div>
                    <div class="col">
                        <div class="p-3">Row column</div>
                    </div>
                </div>
            </div>
                </>
                )
}

                export default TopBar