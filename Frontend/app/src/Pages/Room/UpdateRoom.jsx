import React, { Component } from "react";
import "./CreateRoom.css";
import { faRedo, faPlus, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { roomURL } from "../../Services/endpoints";
import Swal from "sweetalert2";

export default class UpdateRoom extends Component {
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

    const res = axios.post(roomURL, data).then(() => {
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
          <Header topic="Room Management" />
          <div className="CreateItem">
            <div className="Item-Create-Heading-Container">
              <h3 className="Add-Item-Heading">Update Room</h3>
            </div>
            <div className="Item-Create-Body-Container">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">Room no :</label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      type="text"
                      id="nic"
                      name="itemNo"
                      pattern="[A-Z,0-9]{6}"
                      placeholder="Room No"
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Type :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    name="name"
                    placeholder="Type"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Availability :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="text"
                    id="lastName"
                    name="name"
                    placeholder="Availability"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
                <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Price :</label>
                <div className="col-sm-9">
                  <input
                    className="form-control"
                    type="number"
                    id="email"
                    name="email"
                    placeholder="price"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
                <div className="ItemRow text-end">
                <button
                  type="submit"
                  className="Item-Button-Update"
                  onClick={{}}
                >
                  <FontAwesomeIcon icon={faCheckCircle} /> Update Room
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
