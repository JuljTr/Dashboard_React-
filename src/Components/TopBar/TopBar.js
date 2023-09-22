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
                </Container>
            </Navbar>
        </>
    )
}

export default TopBar