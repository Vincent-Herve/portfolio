import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    const handleClickLink = (event) => {
        if (event.target.textContent === 'A propos de moi') {
            window.scrollTo({
                top: document.querySelector('.about').offsetTop,
                behavior: 'smooth',
            });
        }
        else if (event.target.textContent === 'Projets') {
            window.scrollTo({
                top: document.querySelector('.project').offsetTop,
                behavior: 'smooth',
            });
        }
        else if (event.target.textContent === 'Compétences') {
            window.scrollTo({
                top: document.querySelector('.skill').offsetTop,
                behavior: 'smooth',
            });
        }
        else if (event.target.textContent === 'Contact') {
            window.scrollTo({
                top: document.querySelector('.contact').offsetTop,
                behavior: 'smooth',
            });
        }
        else {
            window.scrollTo({
                top: document.querySelector('.home').offsetTop,
                behavior: 'smooth',
            });
        }
    };
    return (
        <Navbar id="header" className="navbar transparent" fixed="top" expand="lg">
            <Navbar.Brand bsPrefix="navbar-website-name" onClick={handleClickLink} href="#home">Vincent Herve</Navbar.Brand>
            <Navbar.Toggle className="burger" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>
                    <Nav.Link className="nav-link" active href="#about" onClick={handleClickLink}>A propos de moi</Nav.Link>
                    <Nav.Link className="nav-link" active href="#project" onClick={handleClickLink}>Projets</Nav.Link>
                    <Nav.Link className="nav-link" active href="#skill" onClick={handleClickLink}>Compétences</Nav.Link>
                    <Nav.Link className="nav-link" active href="#contact" onClick={handleClickLink}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;