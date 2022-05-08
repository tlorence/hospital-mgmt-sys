import React from "react";
import "./SideNav.css";
import { imagePath } from "../../Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faTachometerAlt,
  faUserInjured,
} from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import { faBookMedical } from "@fortawesome/free-solid-svg-icons";
import { faCommentMedical } from "@fortawesome/free-solid-svg-icons";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 sidebar">
        <Link to="/dashboard">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <div className="d-flex justify-content-center">
              <img
                src={imagePath + `logo.png`}
                alt=""
                className="logo-sidebar"
              />
            </div>
            <span className="fs-4"></span>
          </a>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          {/* <li>
            <NavLink
              to="/dashboard"
              activeClassName="active"
              className="nav-link mt-2 mb-2 text-white"
            >
              <div className="row">
                <div className="col-4">
                  <FontAwesomeIcon icon={faTachometerAlt} size="2x" />
                </div>
                <div className="col-8 text-start mt-2 ">Dashboard</div>
              </div>
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink
              to="/createDoctor"
              activeClassName="active"
              className="nav-link mt-2 mb-2 text-white"
            >
              <div className="row">
                <div className="col-4">
                  <FontAwesomeIcon icon={faHandHoldingMedical} size="2x" />
                </div>
                <div className="col-8 text-start mt-2">My Details</div>
              </div>
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/patientList"
              activeClassName="active"
              className="nav-link mt-2 mb-2 text-white"
            >
              <div className="row">
                <div className="col-4">
                  <FontAwesomeIcon icon={faUserInjured} size="2x" />
                </div>
                <div className="col-8 text-start mt-2">Patient</div>
              </div>
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/appointmentList"
              activeClassName="active"
              className="nav-link mt-2 mb-2 text-white"
            >
              <div className="row">
                <div className="col-4">
                  <FontAwesomeIcon icon={faBookMedical} size="2x" />
                </div>
                <div className="col-8 text-start mt-2">Appointment</div>
              </div>
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/ambulanceList"
              activeClassName="active"
              className="nav-link mt-2 mb-2 text-white"
            >
              <div className="row">
                <div className="col-4">
                  <FontAwesomeIcon icon={faAmbulance} size="2x" />
                </div>
                <div className="col-8 text-start mt-2">Ambulance</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/roomList"
              activeClassName="active"
              className="nav-link mt-2 mb-2 text-white"
            >
              <div className="row">
                <div className="col-4">
                  <FontAwesomeIcon icon={faBed} size="2x" />
                </div>
                <div className="col-8 text-start mt-2">Room</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/attendantList"
              activeClassName="active"
              className="nav-link mt-2 mb-2 text-white"
            >
              <div className="row">
                <div className="col-4">
                  <FontAwesomeIcon icon={faCommentMedical} size="2x" />
                </div>
                <div className="col-8 text-start mt-2">Attendant</div>
              </div>
            </NavLink>
          </li> */}
        </ul>
        <hr />
      </div>
    </div>
  );
}
