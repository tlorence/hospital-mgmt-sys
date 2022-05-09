import React, { Component } from "react";
import "./UpdateDoctor.css";
import { faRedo, faPlus, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { addOrderURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class UpdateDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      itemId: "",
      quantity: 0,
      unitPrice: 0,
      totalPrice: 0,
      date: "",
      customerName: "",
      customerPhoneNo: "",
      status: 0,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      description: this.state.description,
      itemId: this.state.itemId,
      quantity: this.state.quantity,
      unitPrice: this.state.unitPrice,
      totalPrice: this.state.quantity * this.state.unitPrice,
      date: this.state.date,
      customerName: this.state.customerName,
      customerPhoneNo: this.state.customerPhoneNo,
      status: this.state.status,
    };

    const res = axios.post(addOrderURL, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Insert Successful!!!",
      }).then(() => {
        window.location = "/orderList";
      });
    });
  };

  reset() {
    const res = {
      description: "",
      itemId: "",
      unitPrice: 0,
      totalPrice: 0,
      date: "",
      customerName: "",
      customerPhoneNo: "",
    };
  }

  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Doctor Management" />
          <div className="CreateOrder">
            <div className="Order-Create-Heading-Container">
              <h3 className="Add-Order-Heading">Update Doctor</h3>
            </div>
            <div className="Order-Create-Body-Container">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Doctor ID :</label>
                  <div className="ui fluid col-sm-9">
                    <input
                      className="form-control"
                      
                      type="text"
                      id="itemId"
                      name="itemId"
                      placeholder="Doctor ID"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">
                    Name :
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      
                      type="text"
                      id="unitPrice"
                      name="unitPrice"
                      placeholder="Name"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Specialization :</label>
                  <div className="ui fluid col-sm-9">
                    <input
                      className="form-control"
                      
                      name="quantity"
                      type="number"
                      placeholder="Specialization"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">
                    Mobile :
                  </label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="text"
                      id="totalPrice"
                      name="totalPrice"
                      placeholder="Mobile"
                      
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Location :</label>
                  <div className="ui fluid col-sm-9">
                    <input
                      className="form-control"
                      
                      type="text"
                      id="date"
                      name="date"
                      placeholder="Location"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                
                <div className="OrderRow text-end">
                <button type="submit" className="Delivery-Button-Update-ud">
                  <FontAwesomeIcon icon={faCheckCircle} /> Update Doctor
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
