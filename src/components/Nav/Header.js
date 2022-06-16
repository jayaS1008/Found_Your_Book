import React, {useState} from "react";
import { Menu } from 'antd';
import { AliwangwangOutlined, AppstoreOutlined, UserAddOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
const {SubMenu} =Menu;

const Header =()=>
{
    const [current, setCurrent] = useState('home');

    const onClick = (e) => {
      console.log(e.key);
      setCurrent(e.key);
    }
    return(
       <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" >
        <Menu.Item key="home" icon={<AliwangwangOutlined />}>
         <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="login" icon={< AppstoreOutlined/>}>
         <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="register" icon={<UserAddOutlined />}>
         <Link to="/register">Register</Link>
        </Menu.Item>
      </Menu>
    );
  
}
export default Header;