import React, { Component } from "react";
import "./AmbulanceUpdate.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import Swal from "sweetalert2";
import { getDriverURLbyId, updateDriverURL } from "../../Services/endpoints";

export default class AmbulanceUpdate extends Component {
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
  async componentDidMount() {
    let id = localStorage.getItem("updateId");
    await axios.get(getDriverURLbyId + id).then((result) => {
      this.setState({
        licenceNo: result.data.licenceNo,
        name: result.data.name,
        address: result.data.address,
        vehicleNo: result.data.vehicleNo,
        vehicleType: result.data.vehicleType,
        phoneNo: result.data.phoneNo,
      });
    });
  }

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
    axios.put(updateDriverURL, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Update Successful!!!",
      }).then(() => {
        window.location = "/driverList";
      });
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="UpdateDriver">
        <SideNav />
        <div className="content-layer">
          <Header topic="Ambulance Management" />
          <div className="Driver-Update-Heading-Container">
            <h3 className="Update-Driver-Heading">Update Ambulance</h3>
          </div>
          <div className="Driver-Update-Body-Container">
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
              <div className="DriverRow">
                <button type="submit" className="Driver-Button-Update">
                  <FontAwesomeIcon icon={faCheckCircle} /> Update Ambulance
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
