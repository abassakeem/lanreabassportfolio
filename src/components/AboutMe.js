import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/images/color-sharp.png";



const AboutMe = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
        };
    return (
        <section className="skill" id="aboutMe">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>About Me</h2>
                    
                    <Carousel responsive={responsive} infiite={true} className="skill-slider">
                        <div classname="item">
                        <p>
                            I'm very ambitious front-end developer looking for a role in
                            established IT company with the opportunity to work with the latest
                            technologies on challenging and diverse projects.
                        </p>
                        </div>
                        <div classname="item">
                        <p>
                            I'm quietly confident, naturally curious, and perpetually working on
                            improving my chops one design problem at a time.
                        </p>
                            
                        </div>
                        <div classname="item">
                        <p>
                            If I need to define myself in one sentence that would be a a sports fanatic,
                            fashion enthusiast, and tech-obsessed!!!
                        </p>
                            
                        </div>
                        
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        
    </section>
      );
}
 
export default AboutMe;