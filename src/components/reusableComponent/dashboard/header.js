import React from "react";
import { Layout, Avatar, Menu, Dropdown, Button, message } from "antd";
import { UserOutlined, DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
const { Header } = Layout;

const Headers = (props) => {
  const { onToggleMenu } = props;
  const { handleLogout } = props;

  function handleButtonClick(e) {
    message.info("Click on left button.");
  }

  function handleMenuClick(e) {
    message.info("Click on menu item.");
  }
  let { name } = useParams();

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header style={{ padding: "0 5px" }}>
        <div
          style={{
            float: "right",
            paddingRight: "5px",
            display: "flex",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <Avatar icon={<UserOutlined />} style={{ marginTop: "15px" }} />
          <p style={{ padding: "17px", fontSize: "20px" }}>{name}</p>
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <DownOutlined />
            </a>
          </Dropdown>
        </div>
        <Link
          className="item link"
          style={{ padding: "0px" }}
          onClick={onToggleMenu}
        >
          <i class="fa fa-bars" aria-hidden="true"></i>
        </Link>
      </Header>
    </Layout>
  );
};

export default Headers;
