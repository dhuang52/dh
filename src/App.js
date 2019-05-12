import React from 'react';
import { Row, Col } from 'antd';
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Connect from "./Components/Connect";
import './App.css';

function App() {
  return (
    <div>
      <Row id="intro">
        <Col> <Header /> </Col>
      </Row>

      <Row className="section">
        <Col> <Intro /> </Col>
      </Row>

      <Row className="section" id="experience">
        <Col> <Experience /> </Col>
      </Row>

      <Row className="section" id="projects">
        <Col> <Projects /> </Col>
      </Row>

      <Row className="section" id="connect">
        <Col> <Connect /> </Col>
      </Row>
    </div>
  );
}

export default App;
