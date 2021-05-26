import axios from 'axios'

/**
 * Get all patients from export const PATIENTS_URL = 'http://localhost:8000/patients/'
 * @param {string} patientsUrl API URL for patients
 * @returns {Promise} Query result for patients
 */
export async function getAllPatients (patientsUrl) {
  const results = await axios.get(patientsUrl)
  const patients = results.data
  console.log('patients: ' + JSON.stringify(patients))
  return patients
}
