import axios from 'axios'


/**
 * Get all patients from export const PATIENTS_URL = 'http://localhost:8000/patients/'
 * @param {string} patientsUrl API URL for patients
 * @returns {Promise} Query result for patients
 */
export async function createPatient (patientsUrl, patientDetails) {
  const results = await axios.post(patientsUrl, patientDetails).then(function (response){
    console.log("response: " + JSON.stringify(response))
  }).catch(function (errors) {
    console.log("errors: " + JSON.stringify(errors))
  })
}


/**
 * Get all patients from export const PATIENTS_URL = 'http://localhost:8000/patients/'
 * @param {string} patientsUrl API URL for patients
 * @returns {Promise} Query result for patients
 */
 export async function deletePatient (patientsUrl, patientDetails) {
  const results = await axios.post(patientsUrl, patientDetails).then(function (response){
    console.log("response: " + JSON.stringify(response))
  }).catch(function (errors) {
    console.log("errors: " + JSON.stringify(errors))
  })
}
