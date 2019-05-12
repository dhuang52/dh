import React from 'react';
import { Row, Col, Card, Tag } from 'antd';

const tagColor = "#FF6F61"

class Intro extends React.Component {
  render() {
    const iframeStyle = {
      width: 100+"%",
      maxWidth: 660+"px",
      overflow: "hidden",
      background: "transparent",
    };
    return (
      <div>
        <h3>Hey, what's up?</h3>
        <h1><b>I'm David Huang.</b></h1>
        <h3>I'm a student <span role='img' aria-label='cs'>‍👨‍💻</span>/music producer <span role='img' aria-label='headphone'>🎧</span>/thinker <span role='img' aria-label='thinking'>🤔</span>.</h3>
        <ul>
          <li>Education: <b>Washington University in St. Louis</b>, Class of <b>2020</b></li>
          <li>Majors: <b>Computer Science, Financial Engineering</b></li>
          <li>Interests: music, longboards, Chinese literature, more to come </li>
        </ul>
        <h3>Stuff I use:</h3>
        <Row className="subsection">
          <Col span={2}>
            <Tag color={tagColor}>Python</Tag><br/>
            <Tag color={tagColor}>Java</Tag><br/>
            <Tag color={tagColor}>C++</Tag><br/>
            <Tag color={tagColor}>JavaScript</Tag><br/>
          </Col>
          <Col span={2}>
            <Tag color={tagColor}>PHP</Tag><br/>
            <Tag color={tagColor}>Swift</Tag><br/>
            <Tag color={tagColor}>MatLab</Tag><br/>
            <Tag color={tagColor}>R</Tag><br/>
          </Col>
          <Col span={2}>
            <Tag color={tagColor}>MySQL</Tag>
            <Tag color={tagColor}>AWS</Tag>
            <Tag color={tagColor}>Node.js</Tag>
            <Tag color={tagColor}>React/Redux</Tag>
          </Col>
        </Row>
        <h3>Stuff I like:</h3>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <iframe
                title='aries'
                allow="autoplay *; encrypted-media *;"
                frameBorder="0" height="450"
                style={iframeStyle}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts
                  allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/us/album/welcome-home/1459379023?app=music">
              </iframe>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              Rainy days... Stuff to come
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              Stuff to come
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Intro;
