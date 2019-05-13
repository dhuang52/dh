import React from 'react';
import { Layout, Menu, Icon, } from 'antd';
import descriptions from "./Data/descriptions.js";

const {
  Content, Sider,
} = Layout;

const dark = false;

// const icons = {
//   1: "laptop",
//   2: "laptop",
//   3: "mobile",
//   4: "team",
//   5: "experiment"
// }

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
    name.innerHTML = "<b>"+exp.name+"</b>";
    name.href = exp.link
    document.getElementById("title").innerHTML = exp.title;
    document.getElementById("time").innerHTML = exp.time;

    this.fillDescriptions(exp.description)
  }

  render() {
    return (
      <div>
        <h2 id="experience-section"><Icon type="laptop" /> Experience</h2>
          <Layout>
            <Content>
              <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                    theme={dark ? 'dark' : ''}
                    onClick={this.handleChange}
                  >
                    <Menu.Item key="1">{descriptions["1"].name}</Menu.Item>
                    <Menu.Item key="2">{descriptions["2"].name}</Menu.Item>
                    <Menu.Item key="3">{descriptions["3"].name}</Menu.Item>
                    <Menu.Item key="4">{descriptions["4"].name}</Menu.Item>
                    <Menu.Item key="5">{descriptions["5"].name}</Menu.Item>
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
