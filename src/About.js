import React from "react";
import Logo from "./photos/Jaime.jpg";
import styled from "styled-components"

const Styles = styled.div`
.layout{
  background: "black";
  color: "black";
  padding-Top: 30;
  padding-Bottom: 30;
}

hr {
  border-top: 5px dotted #006400;
  width: 50%;
  margin: auto;
  padding-bottom: 20px;
}

.heading{
  padding-top: 20px;
}

.list{
  text-align: center;
}



`

const About = () => (

  <Styles>
    <div className="p-4">
      <div className="layout">
        <h1 className="display-4 "
          style={{
            textAlign: "center", borderBottom: '3px solid #006400'
          }}>Jaime Zepeda</h1>
        <br></br>
        <div className="container text-center">
          <div className="row">

            <div className="col">

              <img src={Logo} alt="logo" className="img-fluid rounded-circle justify-content-centernpm" />




              <h3 className="heading">Front End Developer</h3>
              <hr />

              <ul className=" list-unstyled">
                <li className=""> Specialties :  React.js, HTML, CSS, Javascript, MYSQL</li>
                <li className="">
                  Bachelors Degree in Computer Science.
          </li>
                <li className="">
                  Full Stack Web Development Certification.
          </li>

                <li className="">Looking for the right team to grow as a Web Developer.
          </li>
              </ul>


           
              <div className="social-links">
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

              </div>
            </div>



          </div>
        </div>
      </div>
    </div >
  </Styles>
);

export default About;
