import React from 'react';
import { Row, Col } from 'antd';
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Connect from "./Components/Connect";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      intro: "process",
      experience: "wait",
      projects: "wait",
      connect: "wait",
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  isInViewport = (bounds) => (
    (bounds.top | 0) >= 0 &&
    bounds.left >= 0 &&
    Math.abs(bounds.y) <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounds.right <= (window.innerWidth || document.documentElement.clientWidth)
  );


  handleScroll = () => {
    let introBounds = document.getElementById("intro").getBoundingClientRect();
    let expBounds = document.getElementById("experience-section").getBoundingClientRect();
    let projBounds = document.getElementById("projects").getBoundingClientRect();
    let connBounds = document.getElementById("connect").getBoundingClientRect();
    if(this.isInViewport(introBounds)) {
      if(this.state.intro !== "process") {
        this.setState({
          intro: "process",
          experience: "wait",
          projects: "wait",
          connect: "wait",
        });
      }
    } else if(this.isInViewport(expBounds)) {
      if(this.state.experience !== "process") {
        this.setState({
          intro: "finish",
          experience: "process",
          projects: "wait",
          connect: "wait",
        });
      }
    } else if(this.isInViewport(projBounds)) {
      if(this.state.projects !== "process") {
        this.setState({
          intro: "finish",
          experience: "finish",
          projects: "process",
          connect: "wait",
        });
      }
    } else if(this.isInViewport(connBounds)) {
      if(this.state.connect !== "process") {
        this.setState({
          intro: "finish",
          experience: "finish",
          projects: "finish",
          connect: "process",
        });
      }
    }
  }

  render() {
    return (
    <div>
      <Row>
        <Col>
          <Header
            intro={this.state.intro}
            experience={this.state.experience}
            projects={this.state.projects}
            connect={this.state.connect}
          />
        </Col>
      </Row>

      <Row className="section" id="intro">
        <Col> <Intro /> </Col>
      </Row>

      <Row className="section" id="experience">
        <Col> <Experience /> </Col>
      </Row>

      <Row className="section" id="projects">
        <Col> <Projects /> </Col>
      </Row>

      <Row className="section end-section" id="connect">
        <Col> <Connect /> </Col>
      </Row>
    </div>
  );
  }
}

export default App;
