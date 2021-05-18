import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "./sidebar";
import Headers from "./header";
import Home from "./home/home";
import "./home.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../myApp/userSlice";

const DashboardLayout = (props) => {
  const [user, setUser] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logout(false));
  };

  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Headers handleLogout={handleLogout} onToggleMenu={toggleMenu}></Headers>
      <div className="ui attached pushable" style={{ height: "92.75vh" }}>
        <Sidebar handleLogout={handleLogout} toggleMenu={toggle}></Sidebar>
        <section id="home" className="pusher bottom" style={{ height: "auto" }}>
          <Home></Home>
        </section>
      </div>
    </div>
  );
};

export default DashboardLayout;
