import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import LogoLA from '../assets/images/logo(2).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faLinkedinIn,
  faInstagram,
  faGithub,
  

} from '@fortawesome/free-brands-svg-icons'



const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);

    useEffect(() =>{
        const onScroll = () => {
            if (window.scrollY > 45 ){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener ("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink (value);
    }
    return ( 
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container className="text-center">
          <Navbar.Brand href="#home">
            <img src={LogoLA} alt="logo" /> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"> 
          <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onclick={()=> onUpdateActiveLink('home') }>Home</Nav.Link>
              <Nav.Link href="#technologies" className={activeLink === 'technologies' ? 'active navbar-link' : 'navbar-link'} onclick={()=> onUpdateActiveLink('technologies') }>Technologies</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onclick={()=> onUpdateActiveLink('skills') }>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onclick={()=> onUpdateActiveLink('projects') }>Projects</Nav.Link>
              <Nav.Link href="#aboutMe" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onclick={()=> onUpdateActiveLink('aboutMe') }>About Me</Nav.Link>
             
             
              
            </Nav>
            <span className="navbar-text">
            <div className="social-icon text-center">
               
                <a href="https://www.linkedin.com/in/akeem-lanre-abass-618199229/" target="_blank"> <FontAwesomeIcon icon={faLinkedinIn} color="#fff" /></a>
                <a href="https://www.instagram.com/abassakeem_/" target="_blank"> <FontAwesomeIcon icon={faInstagram} color="#fff" /></a>
                <a href="https://github.com/abassakeem" target="_blank"> <FontAwesomeIcon icon={faGithub} color="#fff" /></a>
            </div>
            <button className="vvd text-center" onClick={() => console.log('connect')} ><span><a className="email" href="mailto:lanreabassab1@gmail.com" target="_blank">Contact Me</a></span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}
 
export default NavBar;