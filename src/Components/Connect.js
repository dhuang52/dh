import React from 'react';
import { Row, Col, Icon, Card } from 'antd';

const { Meta } = Card;

class Connect extends React.Component {

  render() {
    return (
      <div>
        <h2><Icon type="share-alt" /> Connect</h2>
          <Row gutter={16}>
            <Col span={8}>
              <Card
                hoverable
              >
                <Meta
                  title={<a
                          href="https://www.linkedin.com/in/david-huang-48763816a/">
                            LinkedIn <Icon type="linkedin" />
                          </a>}
                  description="Let's connect!"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
              >
                <Meta
                  title={<a
                          href="https://github.com/dhuang52">
                            Github <Icon type="github" />
                          </a>}
                  description="Check out my projects!"
                />
              </Card>
            </Col>
          </Row>
      </div>
    )
  }
}

export default Connect;
