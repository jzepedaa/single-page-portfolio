import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import About from "./About";
import Projects from "./Projects";
import Resume from './Resume';
import Footer from './Footer';
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import styled from 'styled-components';


const Styles = styled.div`
.layout{
  background: "black";
}


`



class App extends Component {
  render() {
    return (
      <Styles>
        <div className="layout">
          <Navbar />
          <div className="container">
            <About />
          </div>
          <div className="container">
            <Projects />
          </div>
          <div className="container">
            <Resume />
          </div>
          <div>
            <ScrollUpButton />
          </div>

          <Footer />
        </ div>
      </Styles>
    )
  }

}
export default App;
