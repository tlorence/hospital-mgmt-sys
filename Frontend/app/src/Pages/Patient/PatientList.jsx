import React, { Component } from "react";
import "./PatientList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import SearchHeader from "../../Components/Header/SearchHeader";
import SideNav from "../../Components/SideNav/SideNav";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { deleteInventoryURL, inventoryURL } from "../../Services/endpoints";
import { Redirect, Link } from "react-router-dom";
import Swal from "sweetalert2";
import generatePDFItems from "./InventoryReport";

export default class PatientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemNo: "",
      itemCategory: "",
      description: "",
      unitPrice: 0,
      inventoryNo: "",
      quantity: 0,
      items: [],
      redirect: false,
    };
  }

  async componentDidMount() {
    await axios.get(inventoryURL).then((result) => {
      this.setState({
        items: result.data,
      });
    });
  }

  delete(inventoryNo) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you want to delete " + inventoryNo + " item?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your item " + inventoryNo + " has been deleted.",
            "success"
          );
          axios.delete(deleteInventoryURL + inventoryNo).then(() => {
            this.componentDidMount();
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your " + inventoryNo + " ineventory record is safe :)",
            "error"
          );
        }
      });
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/createPatient" />;
    }
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <SearchHeader topic="Patient Management" />
          <div className="ItemRow text-end">
            {this.renderRedirect()}
            {/* <button
              type="submit"
              className="Item-Button-Add"
              onClick={this.setRedirect}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Patient
            </button> */}
          </div>
          <div className="Item-Create-Heading-Container">
              <h3 className="Add-Item-Heading">My Patient</h3>
            </div>
            <div className="Item-Create-Body-Container">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3 row">
                  <label className="col-sm-3 col-form-label">NIC :</label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      readOnly
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
                    readOnly
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
                    readOnly
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
                    readOnly
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
                    readOnly
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
                  {/* <button
                    type="reset"
                    className="Item-Button-Inventory-Reset"
                    onClick={this.reset}
                  >
                    <FontAwesomeIcon icon={faRedo} /> Reset
                  </button>
                  <button type="submit" className="Item-Button-Inventory-Add">
                    <FontAwesomeIcon icon={faPlus} /> Add Patient
                  </button> */}
                </div>
              </form>
            </div>
          {/* <div className="row">
            <table className="table table-bordered  Inventory" id="myTable">
              <tr className="InventoryListItems">
                <th className="ps-4">NIC</th>
                <th className="ps-4">First name</th>
                <th className="ps-4">last Name</th>
                <th className="ps-4">Email</th>
                <th className="ps-4">Address</th>
                <th className="ps-4"></th>
              </tr>
              {items.map((item) => {
                return (
                  <tr
                    key={item.itemNo}
                    className="InventoryListItems text-white"
                  >
                    <td className="ps-4">{item.inventoryNo}</td>
                    <td className="ps-4">{item.itemNo}</td>
                    <td className="ps-4">{item.description}</td>
                    <td className="ps-4">{item.itemCategory}</td>
                    <td className="ps-4">{item.unitPrice}</td>
                    <td className="ps-4">{item.quantity}</td>
                    <td className="ps-4">
                      <FontAwesomeIcon
                        size="2x"
                        icon={faEdit}
                        onClick={() => {
                          localStorage.setItem("updateId", item.inventoryNo);
                          window.location = "/updateItem";
                        }}
                      />
                      <FontAwesomeIcon
                        size="2x"
                        icon={faTrash}
                        onClick={(e) => this.delete(item.inventoryNo)}
                      />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div> */}
        </div>
      </div>
    );
  }
}
