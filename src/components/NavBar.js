import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import frostylogoweb from '../assets/img/frostylogoweb.png';
import x from '../assets/img/x.svg';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={frostylogoweb} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#tokenomics" className={activeLink === 'tokenomics' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Tokenomics')}>Tokenomics</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Project</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://twitter.com/FrostyAvaxMeme"><img src={x} alt="" /></a>
                
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Buy $FROSTY</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
