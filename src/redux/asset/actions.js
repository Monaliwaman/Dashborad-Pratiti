import { assetTypes } from './actionTypes'
import {
  getAssetsApi,
  editAssetApi,
  addAssetApi,
  getAssetTypeApi,
  // getRouteNameApi,
} from './api'
import { toastr } from 'react-redux-toastr'

const handleError = (error) => {
  if (error?.response?.status === 404) {
    toastr.error('Asset', 'Page not found. Please try again.', {
      position: 'top-right',
    })
    return
  } else if (error?.response?.status === 409) {
    toastr.error('Asset', 'Email or Mobile number already register.', {
      position: 'top-right',
    })
  } else if (error?.response?.status === 400) {
    toastr.error(
      'Asset',
      'Something went wrong. Please try again after some time.',
      { position: 'top-right' },
    )
  }
}

export const getAssets = () => {
  // setSelectedData([])
  let apiData = {}
  let errorObj = null
  return async (dispatch) => {
    try {
      dispatch({ type: assetTypes.GET_ASSETS_REQUEST })
      apiData = await getAssetsApi()
      const { data } = apiData
      // console.log('object, ', data)
      if (apiData && (apiData.error || !apiData.data)) {
        errorObj = apiData.error
        throw new Error()
      } else {
        dispatch({
          type: assetTypes.GET_ASSETS_SUCCESS,
          payload: data,
        })
      }
    } catch (error) {
      handleError(error)
      dispatch({
        type: assetTypes.GET_ASSETS_ERROR,
        payload: errorObj,
      })
    }
  }
}

export const getAssetType = () => {
  // setSelectedData([])
  let apiData = {}
  let errorObj = null
  return async (dispatch) => {
    try {
      dispatch({ type: assetTypes.GET_ASSETTYPE_REQUEST })
      apiData = await getAssetTypeApi()
      const { data } = apiData
      // console.log('object, ', data)
      if (apiData && (apiData.error || !apiData.data)) {
        errorObj = apiData.error
        throw new Error()
      } else {
        dispatch({
          type: assetTypes.GET_ASSETTYPE_SUCCESS,
          payload: data,
        })
      }
    } catch (error) {
      handleError(error)
      dispatch({
        type: assetTypes.GET_ASSETTYPE_ERROR,
        payload: errorObj,
      })
    }
  }
}

export const handleAddAssetData = (assetsData) => {
  let apiData = {}
  let errorObj = null
  return async (dispatch) => {
    try {
      dispatch({ type: assetTypes.ADD_ASSETS_REQUEST })
      apiData = await addAssetApi(assetsData)
      const { data, status } = apiData
      if (status === 201) {
        toastr.success('Asset', 'Asset Added successfully !', {
          position: 'top-right',
        })
      }
      if (apiData && (apiData.error || !apiData.data)) {
        errorObj = apiData.error
        throw new Error()
      } else {
        dispatch({
          type: assetTypes.ADD_ASSETS_SUCCESS,
          payload: data,
        })
        // setTotalRecord(totalRecord + 1)
      }
    } catch (error) {
      handleError(error)
      dispatch({
        type: assetTypes.ADD_ASSETS_ERROR,
        payload: errorObj,
      })
    }
  }
}

export const handleEditAsset = (id, editData) => {
  let apiData = {}
  let errorObj = null
  return async (dispatch) => {
    try {
      dispatch({ type: assetTypes.EDIT_ASSETS_REQUEST })
      apiData = await editAssetApi(id, editData)
      const { data, status } = apiData
      if (status === 200) {
        toastr.success('Asset', 'Asset Edited successfully !', {
          position: 'top-right',
        })
      }
      if (apiData && (apiData.error || !apiData.data)) {
        errorObj = apiData.error
        throw new Error()
      } else {
        dispatch({
          type: assetTypes.EDIT_ASSETS_SUCCESS,
          payload: data,
        })
      }
    } catch (error) {
      handleError(error)
      dispatch({
        type: assetTypes.EDIT_ASSETS_ERROR,
        payload: errorObj,
      })
    }
  }
}

// export const getRouteName = () => {
//   let apiData = {};
//   let errorObj = null;
//   return async dispatch => {
//     try {
//       dispatch({ type: customerTypes.GET_ROUTENAME_REQUEST })
//       // const fields = { "name": 1 };
//       apiData = await getRouteNameApi();
//       const { data } = apiData;
//       if (apiData && (apiData.error || !apiData.data)) {
//         errorObj = apiData.error;
//         throw new Error();
//       } else {
//         dispatch({
//           type: customerTypes.GET_ROUTENAME_SUCCESS,
//           payload: data.route_list
//         });
//       }
//     } catch (error) {
//       handleError(error);
//       dispatch({
//         type: customerTypes.GET_ROUTENAME_ERROR,
//         payload: errorObj
//       });
//     }
//   }
// }
