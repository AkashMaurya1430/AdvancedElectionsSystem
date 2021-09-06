import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="nav " id="navbar">
        <nav className="nav__container justify-content-between">
          <NavLink className="nav__link nav__logo" activeClassName="active" to="/">
            <span className="nav__logo-name">Election System</span>
          </NavLink>

          <div className="nav__list">
            <div className="nav__items">
              <NavLink className="nav__link" activeClassName="nav__link-active" to="/dashboard">
                <i className="bx bx-home nav__icon"></i>
                <span className="nav__name">Dashboard</span>
              </NavLink>

              <NavLink className="nav__link" activeClassName="nav__link-active" to="/candidates">
                <i className="bx bx-group nav__icon"></i>
                <span className="nav__name">Candidates</span>
              </NavLink>

              <NavLink className="nav__link" activeClassName="nav__link-active" to="/slots">
                <i className="bx bx-calendar-plus nav__icon"></i>
                <span className="nav__name">Slot Booking</span>
              </NavLink>
            </div>
          </div>

          <NavLink className="nav__link flex-row align-items-center" activeClassName="nav__link-active" to="/slots">
            <i className="bx bx-log-out nav__icon mb-0 me-2"></i>
            <span className="nav__name">Log Out</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
