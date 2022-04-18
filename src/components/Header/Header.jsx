import React from "react";
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Avatar  from '../../Assets/Images/Avatar.jpg'

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
                        <div>
                        <Image
                            roundedCircle
                            width={100}
                            height={100}
                            src={Avatar} />
                        <h4>Maxim</h4>
                        <p>jst.wrx@gmail.com</p>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;