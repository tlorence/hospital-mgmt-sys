import React, { Component } from "react";
import "./AmbulanceCreate.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import { addDriverURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class AmbulanceCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      licenceNo: "",
      name: "",
      address: "",
      vehicleNo: "",
      vehicleType: "",
      phoneNo: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      licenceNo: this.state.licenceNo,
      name: this.state.name,
      address: this.state.address,
      vehicleNo: this.state.vehicleNo,
      vehicleType: this.state.vehicleType,
      phoneNo: this.state.phoneNo,
    };
    const res = axios.post(addDriverURL, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Insert Successful!!",
      }).then(() => {
        window.location = "/driverList";
      });
    });
  };

  reset() {
    const res = {
      licenceNo: "",
      name: "",
      address: "",
      vehicleNo: "",
      vehicleType: "",
      phoneNo: "",
    };
  }

  render() {
    return (
      <div className="CreateDriver">
        <SideNav />
        <div className="content-layer">
          <Header topic="Ambulance Management" />
          <div className="Driver-Create-Heading-Container">
            <h3 className="Add-Driver-Heading">Add Ambulance</h3>
          </div>
          <div className="Driver-Create-Body-Container">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Vehicle No :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="licenceNo"
                    name="licenceNo"
                    placeholder="License No"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Owner Name :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Driver Name"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Avaialble Location :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Driver Address"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Vehicle Type :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="vehicleNo"
                    name="vehicleNo"
                    placeholder="Vehicle No"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="DriverRow text-end">
                <button
                  type="reset"
                  className="Driver-Button-Reset"
                  onClick={this.reset}
                >
                  <FontAwesomeIcon icon={faRedo} /> Reset
                </button>
                <button type="submit" className="Driver-Button-Add">
                  <FontAwesomeIcon icon={faPlus} /> Add Ambulance
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
