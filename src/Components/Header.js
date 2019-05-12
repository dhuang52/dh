import React from 'react';
import { Steps, Icon, PageHeader } from 'antd';
// import FullMoon from "../Icons/full-moon.svg";
// import LeftMoon from "../Icons/gibbous-moon-left.svg";
// import RightMoon from "../Icons/gibbous-moon-right.svg";
// import Moon from "../Icons/moon.svg";

class Header extends React.Component {
  render() {
    const Step = Steps.Step;
    return (
      <PageHeader>
        <Steps className="header">
          <Step status="process" title={<a href="#intro">About Me</a>} icon={<Icon type="user" />}></Step>
          <Step status="wait" title={<a href="#experience">Experience</a>} icon={<Icon type="laptop" />} />
          <Step status="wait" title={<a href="#projects">Projects</a>} icon={<Icon type="folder" />} />
          <Step status="wait" title={<a href="#connect">Connect</a>} icon={<Icon type="share-alt" />} />
        </Steps>
      </PageHeader>
    )
  }
}

export default Header;
