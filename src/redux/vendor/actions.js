import { vendorTypes } from './actionTypes'
import { getVendorsApi, editVendorApi, addVendorApi } from './api'
import { toastr } from 'react-redux-toastr'

const handleError = (error) => {
  if (error?.response?.status === 404) {
    toastr.error('Vendor', 'Page not found. Please try again.', {
      position: 'top-right',
    })
    return
  } else if (error?.response?.status === 409) {
    toastr.error('Vendor', 'Email or Mobile number already register.', {
      position: 'top-right',
    })
  } else if (error?.response?.status === 400) {
    toastr.error(
      'Vendor',
      'Something went wrong. Please try again after some time.',
      { position: 'top-right' },
    )
  }
}

export const getVendors = () => {
  // setSelectedData([])
  let apiData = {}
  let errorObj = null
  return async (dispatch) => {
    try {
      dispatch({ type: vendorTypes.GET_VENDORS_REQUEST })
      apiData = await getVendorsApi()
      const { data } = apiData
      console.log('vendorData', data) //data store
      if (apiData && (apiData.error || !apiData.data)) {
        errorObj = apiData.error
        throw new Error()
      } else {
        dispatch({
          type: vendorTypes.GET_VENDORS_SUCCESS,
          payload: data, //response
        })
      }
    } catch (error) {
      handleError(error)
      dispatch({
        type: vendorTypes.GET_VENDORS_ERROR,
        payload: errorObj,
      })
    }
  }
}

export const handleAddVendorData = (vendorData) => {
  console.log('vendorData', vendorData)
  let apiData = {}
  let errorObj = null
  return async (dispatch) => {
    try {
      dispatch({ type: vendorTypes.ADD_VENDORS_REQUEST })
      apiData = await addVendorApi(vendorData)
      const { data, status } = apiData
      //console.log('data', data)

      if (status === 201) {
        toastr.success('Vendor', 'Vendor Added successfully !', {
          position: 'top-right',
        })
      }
      if (apiData && (apiData.error || !apiData.data)) {
        errorObj = apiData.error
        throw new Error()
      } else {
        dispatch({
          type: vendorTypes.ADD_VENDORS_SUCCESS,
          payload: data,
        })
        // setTotalRecord(totalRecord + 1)
      }
    } catch (error) {
      handleError(error)
      dispatch({
        type: vendorTypes.ADD_VENDORS_ERROR,
        payload: errorObj,
      })
    }
  }
}

export const handleEditVendor = (id, editData) => {
  let apiData = {}
  let errorObj = null
  return async (dispatch) => {
    try {
      dispatch({ type: vendorTypes.EDIT_VENDORS_REQUEST })
      apiData = await editVendorApi(id, editData)
      const { data, status } = apiData
      if (status === 200) {
        toastr.success('Vendor', 'Vendor Edited successfully !', {
          position: 'top-right',
        })
      }
      if (apiData && (apiData.error || !apiData.data)) {
        errorObj = apiData.error
        throw new Error()
      } else {
        dispatch({
          type: vendorTypes.EDIT_VENDORS_SUCCESS,
          payload: data,
        })
      }
    } catch (error) {
      handleError(error)
      dispatch({
        type: vendorTypes.EDIT_VENDORS_ERROR,
        payload: errorObj,
      })
    }
  }
}
