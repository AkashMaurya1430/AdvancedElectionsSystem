import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import * as Routes from "../../Routes";

import "./Sidebar.css";

const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <div className={"nav " + (showSideBar ? "show-menu" : "")} id="navbar">
        <nav className="nav__container justify-content-between">
          <NavLink className="nav__link nav__logo" activeClassName="active" to="/">
            <span className="nav__logo-name">Voter's Portel</span>
          </NavLink>

          <div className="nav__list">
            <div className="nav__items">
              <NavLink className="nav__link" activeClassName="nav__link-active" to={Routes.campaigns}>
                <i className="bx bx-home nav__icon"></i>
                <span className="nav__name">Dashboard</span>
              </NavLink>

              <NavLink className="nav__link" activeClassName="nav__link-active" to={Routes.editProfile}>
                <i className="bx bx-user nav__icon"></i>
                <span className="nav__name">Profile</span>
              </NavLink>

              <NavLink className="nav__link" activeClassName="nav__link-active" to={Routes.candidates}>
                <i className="bx bx-group nav__icon"></i>
                <span className="nav__name">Candidates</span>
              </NavLink>

              {/* <NavLink className="nav__link" activeClassName="nav__link-active" to="/voter/slots">
                <i className="bx bx-calendar-plus nav__icon"></i>
                <span className="nav__name">Slot Booking</span>
              </NavLink> */}
            </div>
          </div>

          <NavLink className="nav__link flex-row align-items-center" activeClassName="nav__link-active" to="/slots">
            <i className="bx bx-log-out nav__icon mb-0 me-2"></i>
            <span className="nav__name">Log Out</span>
          </NavLink>
        </nav>
      </div>

      <nav className="navbar mobileNav">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="">
            Voter's Portal
          </NavLink>
          <i
            className="bx bx-menu-alt-right ms-auto"
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          ></i>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
