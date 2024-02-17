import { AlternateEmailOutlined, Phone } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggleActive, setToggleActive] = useState("");
  const [listActive, setListActive] = useState("");
  const ToggleActive = () => {
    if (toggleActive === "ToggleActive") {
      setToggleActive("");
      setListActive("");
    } else {
      setToggleActive("ToggleActive");
      setListActive("ListActive");
    }
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        className="fristHeader"
      >
        <Grid container spacing={0} item xs={11} justifyContent="right">
          <Grid item xl={2} lg={2} md={3} sm={3} xs={12}>
            <Phone />
            <span>Phone: 9784 477 117</span>
          </Grid>
          <Grid item xl={2} lg={3} md={3} sm={4} xs={12}>
            <AlternateEmailOutlined />
            <span>Email: lokeshjangid.me@gmail.com</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        className="mainHeader"
      >
        <Grid container spacing={0} item xs={10} justifyContent="space-between">
          <Grid item sm={3} xs={8} md={4} lg={4} xl={2}>
            <div className="logo">
              <NavLink to="/">
                <img
                  src={'./logo.png'}
                  alt="Calm Spa & Salon"
                />
              </NavLink>
            </div>
          </Grid>
          <Grid item sm={8} xs={4} md={7} lg={6} xl={4}>
            <div className="NavBar">
              <div className={`NavMenu ${listActive}`}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
              </div>
              <button
                className={`Toggle ${toggleActive}`}
                onClick={ToggleActive}
              >
                <div></div>
                <div></div>
                <div></div>
              </button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
