import { Col, Container, Row } from "react-bootstrap";
import logo from"../assets/images/logo(2).png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faLinkedinIn,
    faInstagram,
    faGithub,
    
  
  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
   
   
   
    return ( 
        <footer className="footer">
            <Container>
                <Row className="align-items-center g-3">
                    <Col sm={4} className="text-center">
                    <img src={logo} />
                    
                    </Col>
                    <Col sm={4} className="text-center call-mail">
                        <Row>
                            <Col sm={6}>
                    <span>CALL <br/> </span><a className="call" href="tel:+2348149792484">+234-814-979-2483</a></Col>
                    <Col sm={6}>
                    <span>EMAIL <br/></span> <a className="email" href="mailto:lanreabassab1@gmail.com">lanreabassab1@gmail.com</a>
                    </Col>
                    </Row>
                    </Col>
                    
                    <Col sm={4} className="text-center text-sm-end">
                        <div className="social-icon" >
                        <a href="https://www.linkedin.com/in/akeem-lanre-abass-618199229/" target="_blank"> <FontAwesomeIcon icon={faLinkedinIn} color="#fff" /></a>
                        <a href="https://www.instagram.com/abassakeem_/" target="_blank"> <FontAwesomeIcon icon={faInstagram} color="#fff" /></a>
                        <a href="https://github.com/abassakeem" target="_blank"> <FontAwesomeIcon icon={faGithub} color="#fff" /></a>
                        </div>
                        <p>CopyRight 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
     );
}
 
export default Footer;