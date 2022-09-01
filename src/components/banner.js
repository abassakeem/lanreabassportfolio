import { useEffect, useState } from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {
    faPhp,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faSquareGithub,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import Loader from 'react-loaders'
  import navIcon4 from '../assets/images/github.svg';
  
import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
const Banner = () => {
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting]= useState(false);
    const toRotate = ["eb Developer", "eb Designer "];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(275 - Math.random() *100);
    const period = 1250;

    useEffect(()=> {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker)};
    }, [text])
    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0,text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);

        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelta(500)
        }
    }


    return ( 
        <section className="banner" id="home">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6}>
                        <TrackVisibility>
                        {
                           ({isVisible}) => 
                        
                        <div className={isVisible ? "animate__animated animate__fadeIn" : "" }>
                            <span className="Tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi,`}</h1> 
                            <TrackVisibility>
                        {
                           ({isVisible}) => 
                        
                        <div className={isVisible ? "animate__animated animate__bounceInLeft" : "" }>
                            <h2>{`{ I'm `}<span className="name-text">L</span>{`anre-`}<span className="name-text name-text1">A</span>{`bass Akeem `}}</h2>
                            </div>}
                            </TrackVisibility>
                            <h1 className="wrap">W{text}</h1>
                            <p><small>
                                I'm very ambitious Web developer looking for a role in
                                established IT company with the opportunity to work with the latest
                                technologies on challenging and diverse projects.
                                </small>
                            </p>
      
                            <button onClick={() => console.log('connect')}><a href="https://www.linkedin.com/in/akeem-lanre-abass-618199229/" target="_blank">Contact me  </a><ArrowRightCircle size={25} /></button>
                            
                            </div>}
                            </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6}>
                    <TrackVisibility>
                        {
                           ({isVisible}) => 
                        
                        <div className={isVisible ? "animate__animated animate__zoomIn" : "" }>
                    <Container className="stage-cube-cont justify-content-center align-items-center">
                        <div className="cubespinner">
                            <div className="face face1 ">
                            <FontAwesomeIcon icon={faPhp} color="#ee4047" />
                            </div>
                            <div className="face face2">
                            <FontAwesomeIcon icon={faHtml5} color="#333" />
                            </div>
                            <div className="face face3">
                            <FontAwesomeIcon icon={faCss3} color="#ee4047" />
                            </div>
                            <div className="face face4">
                            <FontAwesomeIcon icon={faReact} color="#333" />
                            </div>
                            <div className="face face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#ee4047" />
                            </div>
                            <div className="face face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#333" />
                            </div>
                        </div>
                        </Container>
                        </div>}
                            </TrackVisibility>
                    </Col>

                </Row>
                <Row id="technologies">
                    <div className="technologies-header text-light text-center mt-5">
                        <h1 >Technologies</h1>
                        <p className="mb-5 mt-4">i have worked with a range of technologies in Web development from Front-end to Back-End</p>
                        </div>
                    <Col sm={4} className="text-center">
                    <div className="text-center">
                        <h6>Front-End</h6>
                            <FontAwesomeIcon className="text-center" icon={faReact} color="#fff" />
                            </div>
                            <small className='text-secondary'>Experience with React js alongside HTML,CSS, Bootstrap, Javascript</small>
                    </Col>
                    <Col sm={4} className="text-center">
                    <div className="">
                        <h6>Back-End</h6>
                            <FontAwesomeIcon classNAme="text-center" icon={faPhp} color="#fff" />
                            </div>
                            <small className='text-secondary'>Experience with PHP and databases</small>

                    </Col>
                    <Col sm={4} className="text-center">
                    <div className="">
                        <h6>Version-Control</h6>
                            <FontAwesomeIcon classNAme="text-center text-light" icon={faGithub} color="#fff" />
                            </div>
                            <small className='text-secondary'>Experience with Git/Github</small>

                    </Col>
                </Row>
            </Container>
        </section>

     );
}
 
export default Banner;