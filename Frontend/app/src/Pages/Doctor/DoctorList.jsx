import React, { Component } from "react";
import "./DoctorList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import SearchHeader from "../../Components/Header/SearchHeader";
import SideNav from "../../Components/SideNav/SideNav";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { doctorURL } from "../../Services/endpoints";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteOrderURL } from "../../Services/endpoints";
export default class DoctorList extends Component {
  state = {
    doctorId: "",
    doctorName: "",
    specialization: "",
    mobileNo: "",
    location: "",
    doctors: [],
    redirect: false,
  };

  async componentDidMount() {
    await axios.get(doctorURL).then((result) => {
      this.setState({
        doctors: result.data,
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
      return <Redirect to="/createDoctor" />;
    }
  };



  render() {
    const { doctors } = this.state;
    return (
      <div>
        <SideNav />
        <div className="content-layer">
          <SearchHeader topic="Doctor Management" />
          <div className="OrderRow text-end">
            {this.renderRedirect()}
            <button
              type="submit"
              className="Order-Button-Add"
              onClick={this.setRedirect}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Doctor
            </button>
          </div>
          <div className="row">
            <table class="table table-bordered  order" id="myTable">
              <tr class="orderListItems">
                <th className="ps-4">Doctor ID</th>
                <th className="ps-4">Doctor Name</th>
                <th className="ps-4">Specialization</th>
                <th className="ps-4">Mobile</th>
                <th className="ps-4">Location</th>
                <th className="ps-4"></th>
                
              </tr>

              {doctors.map((doctor) => {
                return (
                  <tr key={doctor.doctorId} class="orderListItems text-white">
                    <td className="ps-4">{doctor.doctorId}</td>
                    <td className="ps-4">{doctor.doctorName}</td>
                    <td className="ps-4">{doctor.specialization}</td>
                    <td className="ps-4">{doctor.mobileNo}</td>
                    <td className="ps-4">{doctor.location}</td>
                    <td className="ps-4">
                      <FontAwesomeIcon
                        size="2x"
                        icon={faEdit}
                        onClick={() => {
                          localStorage.setItem("updateId", doctor.doctorId);
                          window.location = "/updateDoctor";
                        }}
                      />
                      <FontAwesomeIcon
                        size="2x"
                        icon={faTrash}
                        onClick={(e) => this.delete(doctor.doctorId)}
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
