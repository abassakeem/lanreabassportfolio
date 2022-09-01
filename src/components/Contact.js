// import { faGalacticSenate } from "@fortawesome/free-brands-svg-icons";
// import { useState } from "react";
// import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import contactImage from"../assets/images/contact-img.svg";

// const Contact = () => {
//     const formInitialDetails ={
//         firstName: ' ', 
//         lastName: ' ', 
//         email: ' ', 
//         phone: ' ', 
//         message: ' '
//     }
//     const [formdetails,setFormDetails] = useState(formInitialDetails);
//     const [butonText,setbuttonText] = useState('Send');
//     const[status,setStatus] = useState({});
//     const onFormUpdate = (category, value) => {
//         setFormDetails({
//             ...formdetails,
//             [category]: value
//         })
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setbuttonText('Sending...');
//         let response = await fetch("http://localhost:5000/contact",{

        
//         method: "POST",
//         headers: {
//             "Content-Type": "Application/json;charset=utf-8",
//         },
//         body: JSON.stringify(formdetails)
//     });
//     setbuttonText("Send");
//     let result = response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code = 200){
//         setStatus({success: true, message: "Message Sucessfully sent"});
//     }else {
//         setStatus ({ success: faGalacticSenate, message: 'something went wrong, please try again '})
//     }

//     return ( 
//         <section classsName= "contact" id="contact">
//             <Container>
//                 <Row>
//                     <Col md={6}>
//                         <img src={contactImage} />
//                     </Col>
//                     <Col>
//                     <h2> Get In Touch</h2>
//                     <Form onSubmit={handleSubmit}>
//                         <Row>
//                             <Col sm={6} className="px-1">
//                                 <input type ="text" value={formdetails.firstName} placeholder="Firstname" onChange={(e) => onFormUpdate('firstName',e.target.value)} />
//                             </Col>
//                             <Col sm={6} className="px-1">
//                             <input type ="text" value={formdetails.lastName} placeholder="Lastname" onChange={(e) => onFormUpdate('lastName',e.target.value)} />
//                             </Col>
//                             <Col sm={6} className="px-1">
//                             <input type ="email" value={formdetails.email} placeholder="Email address" onChange={(e) => onFormUpdate('email',e.target.value)} />
//                             </Col>
//                             <Col sm={6} className="px-1">
//                             <input type ="tel" value={formdetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone',e.target.value)} />
//                             </Col>
//                             <Col>
//                             <textarea row="6" value={formdetails} placeholder = "Message" onChange={(e) =>onFormUpdate('message', e.target.value)}></textarea>
//                             <Button type= "submit"><span>{buttonText}</span></Button>
//                             </Col>
//                             {
//                             status.message && 
//                             <Col>
//                             <p classname={status.success ===false ? "danger" : "success"}>{status.message}</p></Col>}
//                         </Row>
//                     </Form>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
        
      


//      );
// }
 
// export default Contact;