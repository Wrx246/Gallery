import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar collapseOnSelect bg='light' expand={false}>
            <Container>
                <Navbar.Brand href='#home'>Gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/about'>About me</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;