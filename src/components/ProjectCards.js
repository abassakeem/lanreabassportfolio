import { Col } from "react-bootstrap";
import navIcon4 from '../assets/images/github.svg';

const ProjectCards = ({ title, description, imgUrl, imgSite, gitSite }) => {
    return ( 

        <Col size={12} sm={4}>
        <div className="proj-imgbx">
            
            <img src={imgUrl} className="img img-fluid"/>
            <div className="proj-txtx mt-1">
            <h6>{title}</h6>
            <span><small>{description}</small></span><br></br>
            <a href={gitSite} class="text-dark  m-4 btn btn-light" target="_blank">Git <img src={navIcon4} alt="" /></a><a href={imgSite} class="text-dark btn btn-light " target="_blank">VIEW</a>
            </div>
        
        </div>
        </Col>
    )
};

 
export default ProjectCards;

