import React, { Component } from "react";
import "./CreateAttendant.css";
import { faRedo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { addinventoryURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class CreateAttendant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemNo: "",
      itemCategory: "",
      description: "",
      unitPrice: 0,
      inventoryNo: "",
      quantity: 0,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      itemNo: this.state.itemNo,
      itemCategory: this.state.itemCategory,
      description: this.state.description,
      unitPrice: this.state.unitPrice,
      quantity: this.state.quantity,
    };

    const res = axios.post(addinventoryURL, data).then(() => {
      Swal.fire({
        icon: "success",
        title: "Insert Successful",
      }).then(() => {
        window.location = "/patientList";
      });
    });
  };

  reset() {
    const res = {
      itemNo: "",
      itemCategory: "",
      description: "",
      unitPrice: 0,
      quantity: 0,
    };
  }
  render() {
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <Header topic="Attendant Management" />
          <div className="CreateItem">
            <div className="Item-Create-Heading-Container">
              <h3 className="Add-Item-Heading">Add Attendant</h3>
            </div>
            <div className="Item-Create-Body-Container">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Attendant Id :</label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="text"
                      id="nic"
                      name="itemNo"
                      pattern="[A-Z,0-9]{6}"
                      placeholder="ITM000"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Firstname :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    name="name"
                    placeholder="John Doe"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Lastname :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="lastName"
                    name="name"
                    placeholder="John Doe"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
                <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Working Ward :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="abc@abc.com"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Contact No :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="address"
                    id="address"
                    name="address"
                    placeholder="12/3 1st st"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
                <div className="ItemRow text-end">
                  <button
                    type="reset"
                    className="Item-Button-Inventory-Reset"
                    onClick={this.reset}
                  >
                    <FontAwesomeIcon icon={faRedo} /> Reset
                  </button>
                  <button type="submit" className="Item-Button-Inventory-Add">
                    <FontAwesomeIcon icon={faPlus} /> Add Attendant
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
