import React, { useState } from 'react';
import {Row, Col, Container} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import speakers1 from "../assets/img/speakers1.png";
import kes from "../assets/img/kes.jpg";
import kesLogo from "../assets/img/keslogo.png";
import {FaPhone, FaRegEnvelope, FaInstagram} from 'react-icons/fa';



const Registration = () => {
  const formInitialData = {
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  };
  const [formData, setFormData] = useState(formInitialData);
  const [buttonText, setButtonText] = useState("Send");

  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormData({
      ...formData,
      [category]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    setButtonText("Sending...");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      from_city: formData.city,
      message_html: formData.message,
    };
    emailjs
      .send(
        "service_c5n8kew",
        "template_oqpbv17",
        templateParams,
        "K5dAgsBgJKi3FRlYN"
      )
      .then(
        function (response) {
          setStatus({
            success: true,
            message: "Registration Successful!",
          });
          setButtonText("Done");
          setFormData(formInitialData);
          
          window.location.href = 'https://chat.whatsapp.com/DiWt3SuvLdH4Ga7MQGBrNd';
        },

        function (error) {
          setStatus({
            success: false,
            message: "Failed. Check your details.",
          });
          setButtonText("Failed");
        }
      );
  };

  return (
<>
<section className='hero'>

<Container>
  <div className='logo'>
  <img alt="" src={kesLogo} className="w-100"></img>
  </div>
  <Row className=" heroBanner ">
  <Col className='hero-text'>
      <div className='side1'>
      <h1>KINGDOM ENTREPRENUERS SUMMIT 2.0</h1>
      <h3>OCTOBER 02, 2023 I 09:00AM - 03:00PM VENUE: IBADAN, OYO STATE.</h3>
      <a  href="#get-intouch"> <button type="submit"> REGISTER NOW</button></a>
      </div>
    </Col>


    <Col className='imgWrap_container'>
      <div className='imgWrap'>
      <img alt="" src={speakers1} className=" "></img>
      </div>
    </Col>
  </Row>
</Container>
</section>

<section>
<Container  id="get-intouch">
 <Row className="form-row d-flex mt-5">
        
        <Col className="ContactUs-bx mt-5" id="get-intouch" lg={8} md={6} >
        <h3>Fill the form below to get registered.</h3>
       
          <div className='form_container'>
            <form onSubmit={handleSubmit}>
            {status.message && (
                <Col>
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                </Col>
              )}

           
            <div className="new-email-bx">
            <div>
              <input
                placeholder="Full Name"
                type="text"
                id="name"
                name="name"
                value={formData.name} 
                onChange={(e) => onFormUpdate("name", e.target.value)}
                required
              />
            </div>
            <div>
              <input 
                placeholder="Your Whatsapp Number"
                type="tel" minLength={11} maxLength={14}
                id="phone"
                name="phone"
                value={formData.phone} 
                onChange={(e) => onFormUpdate("phone", e.target.value)}
                required
              />
            </div>
            <div>
              <input
                placeholder="From where are you coming for the summit?"
                type="text"
                id="city"
                name="city"
                value={formData.city} 
                onChange={(e) => onFormUpdate("city", e.target.value)}
                required
              />
            </div>

            <div>
              <input
                placeholder="Your Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => onFormUpdate("email", e.target.value)}
                required
              />
              <textarea 
                placeholder="What are the things you hope to learn at the summit?"
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => onFormUpdate("message", e.target.value)}
                required
                row="5"
              />
            </div>

            </div>
            <button type="submit"> <span>{buttonText}</span></button>

            </form>
          </div>
        </Col>

        <Col className='sidetext_container sidetext_container1 ' lg={3} md={6}>
        <div className='sidetext'>
            <span className='subhead1'>Why ATTEND?</span>
            <h4>ATTAIN NEW HEIGHT</h4>
            <Col className='sidetext_container' lg={9}>
            <span>
              Kingdom Entrepreneurs Summit (KES) is an experience <strong>unlike any other conventional event.</strong> It's a corporate yet highly spiritual event that offers a range of sessions that provide you the opportunity to interact and learn from each other. Are you ready to <strong>accelerate and take your new heights?</strong> Let's go! 
            </span>
            </Col>
        </div>

         
        <div className='imgWrap mt-5 mb-4'>
          <img src={kes} alt="" className=" "></img>
          </div>
         
        </Col>
    </Row>
 </Container>
</section>

<section className='footer pt-5 pb-5'>
  <Container >
    <Row>

    <Col lg={6}>
        <h4>SAVE YOUR POST</h4>
        <div className='logo'>
<img src={kesLogo} alt="" className="w-100"></img>
</div>
        <span>A unique event filled with networking, workshops, seminars, and engaging conversations with Spirit-filled industry's leading experts.</span>
      </Col>

     
      <Col lg={3} className='enquiry_container'>
        <h4>For Enquiries</h4>
        <div className="social-icon">
            
               <li> <a href="/"><FaPhone className="footer-icon"/> +2347067853362</a>
              </li>
              <li>
               <a href="oclick@kessumit.com.ng"><FaRegEnvelope className="footer-icon"/> oclick@kessumit.com.ng</a>
               </li>
               <li>
              <a href="/"><FaInstagram className="footer-icon"/> @kes_summit</a>
               </li>
             
            </div>
      </Col>

      {/* <span className='pt-5'>Kingdom Entrepreneurs Conference | Designed by: | EML_Tech | © Copyright All right reserved</span> */}
    </Row>
  </Container>
</section>
 </>
  );
};

export default Registration;