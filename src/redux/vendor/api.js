import { getData, putData, postData } from '../api'

export const getVendorsApi = () => {
  return getData(`vendor/`)
}

export const editVendorApi = (id, data) => {
  return putData(`vendor/put/${id}`, data)
}

export const addVendorApi = (data, fields) => {
  return postData(`vendor/save`, data)
}
