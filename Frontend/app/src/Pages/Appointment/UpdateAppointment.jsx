import React, { Component } from "react";
import "./UpdateAppointment.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import Swal from "sweetalert2";
import {appointmentURL} from "../../Services/endpoints";

export default class UpdateAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryNo: 0,
      orderNo: "",
      description: "",
      address: "",
      customerName: "",
      customerPhoneNumber: "",
      delivery: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    let id = localStorage.getItem("updateId");
    await axios.get(appointmentURL + id).then((result) => {
      this.setState({
        orderNo: result.data.orderNo,
        description: result.data.description,
        address: result.data.address,
        customerName: result.data.customerName,
        customerPhoneNumber: result.data.customerPhoneNumber,
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let id = localStorage.getItem("updateId");
    const data = {
      deliveryNo: id,
      orderNo: this.state.orderNo,
      description: this.state.description,
      address: this.state.address,
      customerName: this.state.customerName,
      customerPhoneNumber: this.state.customerPhoneNumber,
    };

    axios.put(appointmentURL, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Update Successful!!!",
      }).then(() => {
        window.location = "/deliveryList";
      });
    });
  };

  render() {
    return (
      <div className="UpdateDelivery">
        <SideNav />
        <div className="content-layer">
          <Header topic="Appointment Management" />
          <div className="Delivery-Update-Heading-Container">
            <h3 className="Update-Delivery-Heading">Update Appointment</h3>
          </div>
          <div className="Delivery-Update-Body-Container">
            <form onSubmit={this.handleSubmit}>
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Appointment ID. :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="orderNo"
                    name="orderNo"
                    placeholder="Order No."
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
                    placeholder="Description"
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
                    placeholder="Address"
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
                    placeholder="Address"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="DeliveryRow">
                <button type="submit" className="Delivery-Button-Update">
                  <FontAwesomeIcon icon={faCheckCircle} /> Update Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
