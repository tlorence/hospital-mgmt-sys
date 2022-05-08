import React, { Component } from "react";
import "./CreateAppointment.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import { addDeliveryURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class CreateAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNo: "",
      description: "",
      address: "",
      customerName: "",
      customerPhoneNumber: 0,
      status: 0,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      orderNo: this.state.orderNo,
      description: this.state.description,
      address: this.state.address,
      customerName: this.state.customerName,
      customerPhoneNumber: this.state.customerPhoneNumber,
      status: this.state.status,
    };
    console.log("Data to send", data);

    const res = axios.post(addDeliveryURL, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Insert Successful!!",
      }).then(() => {
        window.location = "/deliveryList";
      });
    });
  };

  reset() {
    const res = {
      orderNo: "",
      description: "",
      address: "",
      customerName: "",
      customerPhoneNumber: "",
      status: "",
    };
  }
  render() {
    return (
      <div className="CreateDelivery">
        <SideNav />
        <div className="content-layer">
          <Header topic="Appointment Management" />
          <div className="Delivery-Create-Heading-Container">
            <h3 className="Add-Delivery-Heading">Add Appointment</h3>
          </div>
          <div className="Delivery-Create-Body-Container">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Appointment ID. :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="orderNo"
                    name="orderNo"
                    placeholder="Appointment ID"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Patient ID :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Patient ID"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Start Time :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="time"
                    id="address"
                    name="address"
                    placeholder=""
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">End Time :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="time"
                    id="address"
                    name="address"
                    placeholder=""
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="DeliveryRow text-end">
                <button
                  type="reset"
                  className="Delivery-Button-Reset"
                  onClick={this.reset}
                >
                  <FontAwesomeIcon icon={faRedo} /> Reset
                </button>
                <button type="submit" className="Delivery-Button-Add">
                  <FontAwesomeIcon icon={faPlus} /> Add Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
