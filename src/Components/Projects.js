import React from 'react';
import { Row, Col, Icon, Card, Tag } from 'antd';
import "../Styling/projects.css";

const { Meta } = Card;
const tagColor = "#FF6F61"

class Project extends React.Component {

  render() {
    return (
      <div>
        <h2><Icon type="folder" /> Projects</h2>
        <h4>These are just some of my projects; checkout my <a className="git" href="https://github.com/dhuang52">GitHub</a> to see more!</h4>
          <Row gutter={16} className="projects">
            <Col span={8}>
              <Card
                hoverable
              >
                <Meta
                  title={<div>Heart Attack Prediction <a
                          className="special-link"
                          href="https://github.com/dhuang52/heart-attack-prediction">
                            <Icon type="github" />
                          </a>
                        </div>}
                  description="Built a gradient descent algorithm to learn a logistic regression model that predicts the probability of having a heart attack"
                />
                <p></p>
                <Tag color={tagColor}>ML</Tag>
                <Tag color={tagColor}>MatLab</Tag>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                cover={<img alt="img" src={require("../Icons/nlp-fairytales.png")} />}
              >
                <Meta
                  title={<div>NLP Fairy Tales <a
                          className="special-link"
                          href="https://github.com/dhuang52/nlp-fairy-tales">
                            <Icon type="github" />
                          </a>
                        </div>}
                  description="An interactive correlation matrix made up of fairy tales and their cosine similarity score to understand how similar English fairy tales are with one another"
                />
                <p></p>
                <Tag color={tagColor}>Python</Tag>
                <Tag color={tagColor}>SkLearn</Tag>
                <Tag color={tagColor}>JS</Tag>
                <Tag color={tagColor}>D3</Tag>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                cover={<img alt="img" src={require("../Icons/nyc-gentrification.png")} />}
              >
                <Meta
                  title={<div>Gentrification in NYC <a
                          className="special-link"
                          href="https://github.com/DavLiet/final_project_457">
                            <Icon type="github" />
                          </a>
                          <a
                            className="special-link"
                            href="https://washuvis.github.io/gentrification/">
                              <Icon type="export" />
                          </a>

                        </div>}
                  description="This project serves to educate the common public about gentrification and hopefully inspire others to understand the impact of gentrification in their own communities."
                />
                <p></p>
                <Tag color={tagColor}>Python</Tag>
                <Tag color={tagColor}>JS</Tag>
                <Tag color={tagColor}>D3</Tag>
              </Card>
            </Col>
          </Row>
      </div>
    )
  }
}

export default Project;
