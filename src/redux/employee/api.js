import { getData, putData, postData } from '../api'

export const getEmployeesApi = () => {
  return getData(`employees/`)
}

export const editEmployeeApi = (id, data) => {
  return putData(`employees/put/${id}`, data)
}

export const addEmployeeApi = (data, fields) => {
  return postData(`employees/save`, data)
}
