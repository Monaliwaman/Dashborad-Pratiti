import axios from 'axios'

const serverUrl = 'http://localhost:8080'
export const getData = (url) => {
  return axios.get(`${serverUrl}/${url}`)
}

export const postData = (url, data) => {
  return axios.post(`${serverUrl}/${url}`, data)
}

export const putData = (url, data) => {
  return axios.put(`${serverUrl}/${url}`, data)
}
