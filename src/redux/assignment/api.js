import {
  getData,
  //deleteData,
  putData,
  postData,
  //imageData,
  //excelData,
  //deleteAssignmentMultipleData,
} from '../api'

export const getAssignmentsApi = () => {
  return getData(`assignment`)
}

export const editAssignmentApi = (id, data) => {
  return putData(`assignment/${id}`, data)
}

export const addAssignmentApi = (data, fields) => {
  return postData(`assignment`, data)
}

// export const deleteAssignmentApi = (id) => {
//   return deleteData(`asset/${id}`)
// }

// export const deleteMultipleAssignmentApi = (id) => {
//   return deleteAssignmentMultipleData(`delete-multiple-records`, id)
// }

// export const imageAssignmentApi = (data) => {
//   return imageData(`image/upload`, data)
// }

// export const getRouteNameApi = () => {
//   return getData(`routes?fields={"name":1, "route_no":1}`);
// }

// export const assetExcelSheetApi = (data, tenantId) => {
//   return excelData(`asset/import?tenant_id=${tenantId}`, data)
// }
