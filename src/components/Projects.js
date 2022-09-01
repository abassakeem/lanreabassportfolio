import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { useState } from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import narutoGame from "../assets/images/naruto-game.png";
import portfolio from "../assets/images/portfolio.png";
import portfolio2 from "../assets/images/former portolio.png";

import aeeUser from "../assets/images/aee-user.png";

import aeeAdmin from "../assets/images/aee-admin.png";
import clock from "../assets/images/clock.png";
import weather from "../assets/images/weather.png";
import foodvendor from "../assets/images/foodvendor.png";
import interiorMaster from "../assets/images/interior master.png";
import ProjectCards from "./ProjectCards";
const Projects = () => {
   

        const projects = [
            {
              title: "Portfolio",
              description: "Design & Development of My personal portfolio using React js",
              imgUrl: portfolio,
              imgSite: "https://lanreabassportfolio.netlify.app/",
              gitSite:"https://github.com/abassakeem/lanreabassportfolio",
            },
            {
              title: "Portfolio",
              description: "Design & Development of a portfolio using React js",
              imgUrl: portfolio2,
               imgSite: "https://abassportfolio.netlify.app/",
              gitSite:"https://github.com/abassakeem/portfolio",
            },
            {
              title: "Business Startup",
              description: "Design & Development of the Admin side of an online payment of electricity bill portal",
              imgUrl: aeeAdmin,
              imgSite: "https://aee-admin.netlify.app/",
              gitSite:"https://github.com/abassakeem/AEE-ElectricityPayment",
            },
            {
              title: "Business Startup",
              description: "Design & Development of the User side of an online payment of electricity bill portal",
              imgUrl: aeeUser,
              imgSite: "https://aee-user.netlify.app/",
              gitSite:"https://github.com/abassakeem/AEE-ElectricityPayment",
            },
            
            {
              title: "Food Vendor Business Startup",
              description: "Design & Development of a food vendor website",
              imgUrl: foodvendor,
              imgSite:"https://abassfoodvendor.netlify.app/",
              gitSite:"https://github.com/abassakeem/food-vendor",
            },
            {
              title: "Weather App",
              description: "Design & Development of an app that tells the weather of a searched location",
              imgUrl: weather,
              imgSite:"https://abassweather.netlify.app/",
              gitSite:"https://github.com/abassakeem/Weather",
            },
            
            
            
           
          ];
        const projects2 = [
         
            
            {
              title: "Business Startup",
              description: "Design & Development of a landing page for an interior design startup",
              imgUrl: interiorMaster,
              imgSite:"https://abass-interior-master.netlify.app/",
              gitSite:"https://github.com/abassakeem/interior-master",
            },
            {
              title: "Naruto Game",
              description: "Design & Development of a naruto based game",
              imgUrl: narutoGame,
              imgSite:"https://abassnarutogame.netlify.app/",
              gitSite:"https://github.com/abassakeem/Naruto-Game",
            },
            {
              title: "Clock",
              description: "Design & Development of a clock thattells the time of any given location",
              imgUrl: clock,
              imgSite:"https://abassclock.netlify.app/",
              gitSite:"https://github.com/abassakeem/clock",
            },
          ];
          return ( 


            <section className="project" id="projects">
                <Container>
                    <Row>
                        <Col>
   
                        <h2>Projects</h2>
                        <p>Below you can find some of the works I've done (:</p>
                        
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills"  className="nav-pills justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                              3
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((projects, index)=> {
                                                return (
                                                    <ProjectCards key={index}
                                                    {...projects} />
                                                )
                                            })
                                        }

                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row>
                                        {
                                            projects2.map((projects2, index)=> {
                                                return (
                                                    <ProjectCards key={index}
                                                    {...projects2} />
                                                )
                                            })
                                        }

                                    </Row></Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Row>
                                        {
                                           
                                        }

                                    </Row></Tab.Pane>

                            </Tab.Content>
                            </Tab.Container>
                            
                        </Col>
                    </Row>
                </Container>
               
            </section>
     );
}
 
export default Projects;
