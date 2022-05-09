import React, { Component } from "react";
import "./UpdatePatient.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import Swal from "sweetalert2";
import {patientURL} from "../../Services/endpoints";

export default class UpdatePatient extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    itemNo: "",
    itemCategory: "",
    description: "",
    unitPrice: 0,
    inventoryNo: 0,
    quantity: 0,
    items: [],
  };

  async componentDidMount() {
    let invenID = localStorage.getItem("updateId");
    await axios.get(patientURL + invenID).then((result) => {
      this.setState({
        inventoryNo: result.data.inventoryNo,
        itemNo: result.data.itemNo,
        itemCategory: result.data.itemCategory,
        description: result.data.description,
        unitPrice: result.data.unitPrice,
        quantity: result.data.quantity,
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let invenID = localStorage.getItem("updateId");
    const data = {
      inventoryNo: invenID,
      itemNo: this.state.itemNo,
      itemCategory: this.state.itemCategory,
      description: this.state.description,
      unitPrice: this.state.unitPrice,
      quantity: this.state.quantity,
    };
    axios.put(patientURL, data).then((res) => {
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Update Successful!!!",
      }).then(() => {
        window.location = "/patientList";
      });
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="UpdateItem">
        <SideNav />
        <div className="content-layer">
          <Header topic="Patient Management" />
          <div className="Item-Update-Heading-Container">
            <h3 className="Update-Item-Heading">Update Patient</h3>
          </div>
          <div className="Item-Update-Body-Container">
            <form onSubmit={this.handleSubmit}>
            <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">NIC :</label>
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
                <label className="col-sm-3 col-form-label">First Name :</label>
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
                <label className="col-sm-3 col-form-label">Last Name :</label>
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
                <label className="col-sm-3 col-form-label">Email :</label>
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
                <label className="col-sm-3 col-form-label">Address :</label>
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
              <div className="ItemRow">
                <button
                  type="submit"
                  className="Item-Button-Update"
                  onClick={{}}
                >
                  <FontAwesomeIcon icon={faCheckCircle} /> Update Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
