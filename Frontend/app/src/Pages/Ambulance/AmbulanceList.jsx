import React, { Component } from "react";
import "./AmbulanceList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faDownload,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import SearchHeader from "../../Components/Header/SearchHeader";
import SideNav from "../../Components/SideNav/SideNav";
import axios from "axios";
import { ambulanceURL } from "../../Services/endpoints";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import generatePDFDriver from "./DriverReport";

export default class AmbulanceList extends Component {
  state = {
    vehicleNo: "",
    vehicleOwnerName: "",
    availableLocation: "",
    vehicleType: "",
    ambulances: [],
    redirect: false,
  };

  async componentDidMount() {
    await axios.get(ambulanceURL).then((result) => {
      this.setState({
        ambulances: result.data,
      });
    });
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/createAmbulance" />;
    }
  };

  // delete(licenceNo) {
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: "btn btn-success",
  //       cancelButton: "btn btn-danger",
  //     },
  //     buttonsStyling: false,
  //   });

  //   swalWithBootstrapButtons
  //     .fire({
  //       title: "Are you want to delete " + licenceNo + " order?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonText: "Yes, delete it!",
  //       cancelButtonText: "No, cancel!",
  //       reverseButtons: true,
  //     })
  //     .then((result) => {
  //       if (result.isConfirmed) {
  //         swalWithBootstrapButtons.fire(
  //           "Deleted!",
  //           "Your driver " + licenceNo + " has been deleted.",
  //           "success"
  //         );
  //         axios.delete(deleteDriverURL + licenceNo).then(() => {
  //           this.componentDidMount();
  //         });
  //       } else if (result.dismiss === Swal.DismissReason.cancel) {
  //         swalWithBootstrapButtons.fire(
  //           "Cancelled",
  //           "Your " + licenceNo + " driver record is safe :)",
  //           "error"
  //         );
  //       }
  //     });
  // }

  render() {
    const { ambulances } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <SearchHeader topic="Ambulance Management" />
          <div className="DriverRow">
            {this.renderRedirect()}
            <button
              type="submit"
              className="Driver-Button-List-Add"
              onClick={this.setRedirect}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Ambulance
            </button>
          </div>
          <div className="row">
            <table className="table table-bordered  driverList" id="myTable">
              <tr className="driverListItems">
                <th className="ps-4">Vehicle No</th>
                <th className="ps-4">Owner Name</th>
                <th className="ps-4">Avaialble Location</th>
                <th className="ps-4">Vehicle Type</th>
                <th className="ps-4"></th>
              </tr>
              {ambulances.map((ambulance) => {
                return (
                  <tr
                    key={ambulance.vehicleNo}
                    className="orderListItems text-white"
                  >
                    <td className="ps-4">{ambulance.vehicleNo}</td>
                    <td className="ps-4">{ambulance.vehicleOwnerName}</td>
                    <td className="ps-4">{ambulance.availableLocation}</td>
                    <td className="ps-4">{ambulance.vehicleType}</td>
                    <td className="ps-4">
                      <FontAwesomeIcon
                        size="2x"
                        icon={faEdit}
                        onClick={() => {
                          localStorage.setItem("vehicleNo", ambulance.vehicleNo);
                          window.location = "/ambulanceUpdate";
                        }}
                      />
                      <FontAwesomeIcon
                        size="2x"
                        icon={faTrash}
                        onClick={(e) => this.delete(ambulance.vehicleNo)}
                      />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
