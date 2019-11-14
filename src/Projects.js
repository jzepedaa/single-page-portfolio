import React, { Component } from 'react';
import { Card, Button, ButtonToolbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Grid, Cell } from 'react-mdl';
// import Footer from './footer'
import tiztal from "./photos/tiztalcafe.png";
import wanderlust from "./photos/wanderlust.png";
import hoopdata from "./photos/hoopdata.png";
import soccertrivia from "./photos/soccertrivia.png"


const Styles = styled.div`

.layout{
  background: "#c6c8ca";
  color: "black";
  padding-Top: 30;
  padding-Bottom: 30;
}

.content{
  flex: 1;
  padding:50px;
}

.button{
  font-size: 16px;
    line-height: normal;
    width: 100%;
    background-color: transparent;
    padding: 8px;
    box-sizing: border-box;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    
}
.project-img{
  text-align: center;
}

.card{
  align-items: center;
}

`


class Projects extends Component {
  render() {
    return (
      <Styles>
        <div className="p-4">
          <div className="layout">

            <h1 className="display-4 "
              style={{
                textAlign: "center", borderBottom: '3px solid #006400'
              }}>Most Recent Projects</h1>

            {/* <h2>Most Recent Projects</h2> */}
            <Grid>

              <Cell className="card text-center" col={3} style={{ width: '17rem' }}>
                <Card >
                  <Card.Img variant="top" src={tiztal} />
                  <Card.Body>
                    <Card.Title>Tiztal Cafe</Card.Title>
                    <Card.Text>
                      Website built with Reac.js, React Bootstrap, Node.js, HTML, CSS
    </Card.Text>
                    <ButtonToolbar>
                      <Button variant="outline-secondary" block href="https://tiztalcafe.com" target="_blank">Live Website</Button>
                      <Button variant="outline-secondary" block href="https://github.com/jzepedaa/cafetiztal" target="_blank">Github Repo</Button>
                    </ButtonToolbar>
                  </Card.Body>
                </Card>




              </Cell>



              <Cell className="card resume-right-col" col={3} style={{ width: '17rem' }}>
                <Card >
                  <Card.Img variant="top" src={wanderlust} />
                  <Card.Body>
                    <Card.Title>Wanderlust</Card.Title>
                    <Card.Text>
                      Website built with React.js, Redux, Materialize CSS, Node.js, Mongoose (ORM), Deployed on Heroku
    </Card.Text>
                    <ButtonToolbar>
                      <Button variant="outline-secondary" block href="https://satisfying-wanderlust.herokuapp.com/" target="_blank">Live Website</Button>
                      <Button variant="outline-secondary" block href="https://github.com/jzepedaa/wanderlust" target="_blank">Github Repo</Button>
                    </ButtonToolbar>
                  </Card.Body>
                </Card>
              </Cell>

              {/* </Grid>
            <Grid> */}

              <Cell className="card resume-right-col" col={3} style={{ width: '17rem' }}>
                <Card >
                  <Card.Img variant="top" src={hoopdata} />
                  <Card.Body>
                    <Card.Title>Hoop Data</Card.Title>
                    <Card.Text>
                      Website built with HTML, CSS, Bootstrap, javascript, AJAX, animate.css, fontawesome,
    </Card.Text>


                    <ButtonToolbar>
                      <Button variant="outline-secondary" block href="https://jzepedaa.github.io/HoopData2/#data" target="_blank">Live Website</Button>
                      <Button variant="outline-secondary" block href="https://github.com/jzepedaa/HoopData2" target="_blank">Github Repo</Button>
                    </ButtonToolbar>
                  </Card.Body>
                </Card>


              </Cell>




              <Cell className="card resume-right-col" col={3} style={{ width: '17rem' }}>
                <Card >
                  <Card.Img variant="top" src={soccertrivia} />
                  <Card.Body>
                    <Card.Title>Soccer Trivia</Card.Title>
                    <Card.Text>Website built with HTML, CSS, Javascript</Card.Text>
                    <ButtonToolbar>
                      <Button variant="outline-secondary" block href="https://jzepedaa.github.io/TriviaGame/" target="_blank">Live Website</Button>
                      <Button variant="outline-secondary" block href="https://github.com/jzepedaa/TriviaGame" target="_blank">Github Repo</Button>
                    </ButtonToolbar>
                  </Card.Body>
                </Card>
              </Cell>


            </Grid>

          </div>



        </div>

        {/* <Footer /> */}
      </Styles >



    )
  }
}

export default Projects;