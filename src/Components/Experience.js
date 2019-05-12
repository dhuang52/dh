import React from 'react';
import { Row, Col, Layout, Menu, Icon, } from 'antd';
import descriptions from "./Data/descriptions.js";


console.log(descriptions);
const { SubMenu } = Menu;
const {
  Header, Content, Footer, Sider,
} = Layout;

const dark = false;

const icons = {
  1: "laptop",
  2: "laptop",
  3: "mobile",
  4: "team",
  5: "experiment"
}

class Experience extends React.Component {

  fillDescriptions = (description) => {
    let list = document.getElementById("descriptions");
    let child = list.lastElementChild;
    while(child) {
      list.removeChild(child);
      child = list.lastElementChild;
    }
    description.forEach((d) => {
      let li = document.createElement("li");
      li.innerHTML = d;
      list.appendChild(li);
    })
  }

  handleChange = (item) => {
    let exp = descriptions[item.key];
    let name = document.getElementById("name");
    // "<Icon type=" + icons[item.key] + " />" +
    name.innerHTML = "<b>"+exp.name+"</b>";
    name.href = exp.link
    document.getElementById("title").innerHTML = exp.title;
    document.getElementById("time").innerHTML = exp.time;

    this.fillDescriptions(exp.description)
  }

  render() {
    return (
      <div>
        <h2><Icon type="laptop" /> Experience</h2>
          <Layout>
            <Content>
              <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                    theme={dark}
                    onClick={this.handleChange}
                  >
                    <Menu.Item key="1">Day Zero Diagnostics</Menu.Item>
                    <Menu.Item key="2">Shell TechWorks</Menu.Item>
                    <Menu.Item key="3">Noonlight</Menu.Item>
                    <Menu.Item key="4">Washington University in St. Louis</Menu.Item>
                    <Menu.Item key="5">UNMC</Menu.Item>
                  </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }} id="description">
                  <h2>
                    <a id="name" href="https://www.dayzerodiagnostics.com/"><b>{descriptions["1"].name}</b></a>
                  </h2>
                  <h4><b><span id="title">{descriptions["1"].title}</span></b> from <b><span id="time">{descriptions["1"].time}</span></b></h4>
                  <ul id="descriptions">
                    <li>{descriptions["1"].description[0]}</li>
                  </ul>
                </Content>
              </Layout>
            </Content>
          </Layout>
      </div>
    )
  }
}

export default Experience;