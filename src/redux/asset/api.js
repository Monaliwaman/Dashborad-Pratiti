import {
  getData,
  putData,
  postData,
  //deleteData,
  //imageData,
  //excelData,
  //deleteAssetMultipleData,
} from '../api'

export const getAssetsApi = () => {
  return getData(`asset/`)
}

export const getAssetTypeApi = () => {
  return getData(`assetType/`)
}

export const editAssetApi = (id, data) => {
  return putData(`asset/${id}`, data)
}

export const addAssetApi = (data, fields) => {
  return postData(`asset`, data)
}

// export const deleteAssetApi = (id) => {
//   return deleteData(`asset/${id}`)
// }

// export const deleteMultipleAssetApi = (id) => {
//   return deleteAssetMultipleData(`delete-multiple-records`, id)
// }

// export const imageAssetApi = (data) => {
//   return imageData(`image/upload`, data)
// }

// export const getRouteNameApi = () => {
//   return getData(`routes?fields={"name":1, "route_no":1}`);
// }

// export const assetExcelSheetApi = (data, tenantId) => {
//   return excelData(`asset/import?tenant_id=${tenantId}`, data)
// }
