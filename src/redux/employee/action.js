import { employeeTypes } from './actionTypes'
import { getEmployeesApi, editEmployeeApi, addEmployeeApi } from './api'
import { toastr } from 'react-redux-toastr'

const handleError = (error) => {
  if (error?.response?.status === 404) {
    toastr.error('Employee', 'Page not found. Please try again.', {
      position: 'top-right',
    })
    return
  } else if (error?.response?.status === 409) {
    toastr.error('Employee', 'Email or Mobile number already register.', {
      position: 'top-right',
    })
  } else if (error?.response?.status === 400) {
    toastr.error(
      'Employee',
      'Something went wrong. Please try again after some time.',
      { position: 'top-right' },
    )
  }
}

export const getEmployees = () => {
  // setSelectedData([])
  let apiData = {}
  let errorObj = null
  return async (dispatch) => {
    try {
      dispatch({ type: employeeTypes.GET_EMPLOYEES_REQUEST })
      apiData = await getEmployeesApi()
      const { data } = apiData
      console.log('object, ', data)
      if (apiData && (apiData.error || !apiData.data)) {
        errorObj = apiData.error
        throw new Error()
      } else {
        dispatch({
          type: employeeTypes.GET_EMPLOYEES_SUCCESS,
          payload: data,
        })
      }
    } catch (error) {
      handleError(error)
      dispatch({
        type: employeeTypes.GET_EMPLOYEES_ERROR,
        payload: errorObj,
      })
    }
  }
}

export const handleAddEmployeeData = (employeeData) => {
  console.log('employeeData', employeeData)
  let apiData = {}
  let errorObj = null
  return async (dispatch) => {
    try {
      dispatch({ type: employeeTypes.ADD_EMPLOYEES_REQUEST })
      apiData = await addEmployeeApi(employeeData)
      const { data, status } = apiData
      console.log('data', data)

      if (status === 201) {
        toastr.success('Employee', 'Employee Added successfully !', {
          position: 'top-right',
        })
      }
      if (apiData && (apiData.error || !apiData.data)) {
        errorObj = apiData.error
        throw new Error()
      } else {
        dispatch({
          type: employeeTypes.ADD_EMPLOYEES_SUCCESS,
          payload: data,
        })
        // setTotalRecord(totalRecord + 1)
      }
    } catch (error) {
      handleError(error)
      dispatch({
        type: employeeTypes.ADD_EMPLOYEES_ERROR,
        payload: errorObj,
      })
    }
  }
}

export const handleEditEmployee = (id, editData) => {
  let apiData = {}
  let errorObj = null
  return async (dispatch) => {
    try {
      dispatch({ type: employeeTypes.EDIT_EMPLOYEES_REQUEST })
      apiData = await editEmployeeApi(id, editData)
      const { data, status } = apiData
      if (status === 200) {
        toastr.success('Employee', 'Employee Edited successfully !', {
          position: 'top-right',
        })
      }
      if (apiData && (apiData.error || !apiData.data)) {
        errorObj = apiData.error
        throw new Error()
      } else {
        dispatch({
          type: employeeTypes.EDIT_EMPLOYEES_SUCCESS,
          payload: data,
        })
      }
    } catch (error) {
      handleError(error)
      dispatch({
        type: employeeTypes.EDIT_EMPLOYEES_ERROR,
        payload: errorObj,
      })
    }
  }
}
