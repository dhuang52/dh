import React from 'react';
import { Layout, Menu, Icon, } from 'antd';
import experience from "./Data/descriptions.js";
import "../Styling/experience.css";

const {
  Content, Sider,
} = Layout;

const dark = false;

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
      li.className = "bullet"
      list.appendChild(li);
    })
  }

  handleChange = (item) => {
    let exp = experience[item.key];
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
          <Layout class="layout">
            <Content>
              <Layout style={{ width: '1000px', padding: '24px 0', background: 'white' }}>
                <Sider width={200} style={{ background: '#ffff' }}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={["0"]}
                    defaultOpenKeys={["sub1"]}
                    style={{ height: "100%" }}
                    theme={dark ? "dark" : ""}
                    onClick={this.handleChange}
                  >
                  {experience.map((d, i) => <Menu.Item key={i}>{d.name}</Menu.Item>)}
                  </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }} id="description">
                  <h2>
                    <a id="name" href={experience[0].link}><b>{experience[0].name}</b></a>
                  </h2>
                  <h4><b><span id="title">{experience[0].title}</span></b> from <b><span id="time">{experience[0].time}</span></b></h4>
                  <ul id="descriptions">
                    {experience[0].description.map((d, i) => <li class="bullet">{d}</li>)}
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
