import React, { Component } from "react";
import "./AppointmentList.css";
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
import { appointmentURL } from "../../Services/endpoints";
import { Redirect } from "react-router";
import Swal from "sweetalert2";
// import generatePDF from "./DeliverReportGenaration";
import { Link } from "react-router-dom";

export default class AppointmentList extends Component {
  state = {
    appointmentId: "",
    patientId: "",
    startTime: "",
    endTimel: "",
    appointments: [],
    redirect: false
  };

  async componentDidMount() {
    await axios.get(appointmentURL).then((result) => {
      this.setState({
        appointments: result.data,
      });
    });
  }

  // delete(deliveryNo) {
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: "btn btn-success",
  //       cancelButton: "btn btn-danger",
  //     },
  //     buttonsStyling: false,
  //   });

  //   swalWithBootstrapButtons
  //     .fire({
  //       title: "Are you want to delete " + deliveryNo + " delivery?",
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
  //           "Your delivery " + deliveryNo + " has been deleted.",
  //           "success"
  //         );
  //         axios.delete(deleteDeliveryURL + deliveryNo).then(() => {
  //           this.componentDidMount();
  //         });
  //       } else if (result.dismiss === Swal.DismissReason.cancel) {
  //         swalWithBootstrapButtons.fire(
  //           "Cancelled",
  //           "Your " + deliveryNo + " delivery record is safe :)",
  //           "error"
  //         );
  //       }
  //     });
  // }
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/createAppointment" />;
    }
  };

  render() {
    const { appointments } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <SearchHeader topic="Appointment Management" />
          <div className="DeliveryRow text-end">
            {this.renderRedirect()}
            <button
              type="button"
              className="Delivery-Button-List-Add"
              onClick={this.setRedirect}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Appointment
            </button>
          </div>
          <div className="row">
            <table class="table table-bordered  DeliveryList" id="myTable">
              <tr class="DeliveryListItems">
                <th className="ps-4">Appointment ID No</th>
                <th className="ps-4">patient ID</th>
                <th className="ps-4">Start Time</th>
                <th className="ps-"></th>
                <th className="ps-4">End Time</th>
                
                <th className="ps-4"></th>
              </tr>
              {appointments.map((appointment) => {
                return (
                  <tr
                    key={appointment.appointmentId}
                    className="DeliveryListItems text-white"
                  >
                    <td className="ps-4">{appointment.appointmentId}</td>
                    <td className="ps-4">{appointment.patientId}</td>
                    <td className="ps-4">{appointment.startTime}</td>
                    <td className="ps-4"></td>
                    <td className="ps-4">{appointment.endTimel}</td>
                    
                    {/* <td className="ps-4">{delivery.customerPhoneNumber}</td> */}
                    {/* <td className="ps-4">
                      {appointment.status ? "Completed" : "Pending"}
                    </td> */}
                    <td className="ps-4">
                      <FontAwesomeIcon
                        size="2x"
                        icon={faEdit}
                        onClick={() => {
                          localStorage.setItem("appointmentId", appointment.appointmentId);
                          window.location = "/updateAppointment";
                        }}
                      />
                      <FontAwesomeIcon
                        size="2x"
                        icon={faTrash}
                        onClick={(e) => this.delete(appointment.appointmentId)}
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