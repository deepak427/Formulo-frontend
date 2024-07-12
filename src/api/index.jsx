import axios from "axios";
const API = axios.create({ baseURL: "http://127.0.0.1:5236/" });

export const getPatientData = (patientInfo) => API.post("patient/get", patientInfo);

