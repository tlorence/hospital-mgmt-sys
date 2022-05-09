// import { baseURL } from "."

//Base URL
export const baseURL = "http://localhost:9900/";


//Oder APIs
export const doctorControllerURL = baseURL + "doctor/";
export const doctorURL = doctorControllerURL + "getAll";

//Oder APIs
export const patientControllerURL = baseURL + "patient/";
export const patientURL = patientControllerURL + "getAll";
export const addPatientURL = patientControllerURL + "/addPatient";


//Driver APIs
export const appointmentController = baseURL + "appointment/"
export const appointmentURL = appointmentController + "getAll";

//Inventory APIs
export const ambulanceControllerURL = baseURL + "ambulance/";
export const ambulanceURL = ambulanceControllerURL + "getAll";

//Delivery APIs
export const roomControllerURL = baseURL + "room/";
export const roomURL = roomControllerURL + "getAll";

//User APIs
export const attendantControllerURL = baseURL + "attendant/";
export const attendentURL = attendantControllerURL + "getAll";
export const userControllerURL = baseURL + "user/";
export const addUserURL = userControllerURL + "addUser";
export const userURL = userControllerURL + "allUsers";

//Login APIs
export const loginControllerURL = baseURL + "login/"
export const userLoginURL = loginControllerURL + "auth";
