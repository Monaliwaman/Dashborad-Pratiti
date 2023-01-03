import { assignmentTypes } from './actionTypes'
import {
  getAssignmentsApi,
  editAssignmentApi,
  addAssignmentApi,
  //deleteAssignmentApi,
  // imageAssignmentApi,
  // getRouteNameApi,
  // customerExcelSheetApi,
  // deleteMultipleAssignmentApi,
} from './api'
import { toastr } from 'react-redux-toastr'

const handleError = (error) => {
  if (error?.response?.status === 404) {
    toastr.error('Assignment', 'Page not found. Please try again.', {
      position: 'top-right',
    })
    return
  } else if (error?.response?.status === 409) {
    toastr.error('Assignment', 'Email or Mobile number already register.', {
      position: 'top-right',
    })
  } else if (error?.response?.status === 400) {
    toastr.error(
      'Assignment',
      'Something went wrong. Please try again after some time.',
      { position: 'top-right' },
    )
  }
}

export const getAssignment = () => {
  // setSelectedData([])
  let apiData = {}
  let errorObj = null
  return async (dispatch) => {
    try {
      dispatch({ type: assignmentTypes.GET_ASSIGNMENTS_REQUEST })
      apiData = await getAssignmentsApi()
      const { data } = apiData
      console.log('object, ', data)
      if (apiData && (apiData.error || !apiData.data)) {
        errorObj = apiData.error
        throw new Error()
      } else {
        dispatch({
          type: assignmentTypes.GET_ASSIGNMENTS_SUCCESS,
          payload: data,
        })
      }
    } catch (error) {
      handleError(error)
      dispatch({
        type: assignmentTypes.GET_ASSIGNMENTS_ERROR,
        payload: errorObj,
      })
    }
  }
}

export const handleAddAssignmentData = (assignmentsData) => {
  let apiData = {}
  let errorObj = null
  return async (dispatch) => {
    try {
      dispatch({ type: assignmentTypes.ADD_ASSIGNMENTS_REQUEST })
      apiData = await addAssignmentApi(assignmentsData)
      const { data, status } = apiData
      if (status === 201) {
        toastr.success('Assignment', 'Assignment Added successfully !', {
          position: 'top-right',
        })
      }
      if (apiData && (apiData.error || !apiData.data)) {
        errorObj = apiData.error
        throw new Error()
      } else {
        dispatch({
          type: assignmentTypes.ADD_ASSIGNMENTS_SUCCESS,
          payload: data,
        })
        // setTotalRecord(totalRecord + 1)
      }
    } catch (error) {
      handleError(error)
      dispatch({
        type: assignmentTypes.ADD_ASSIGNMENTS_ERROR,
        payload: errorObj,
      })
    }
  }
}

export const handleEditAssignment = (id, editData) => {
  let apiData = {}
  let errorObj = null
  return async (dispatch) => {
    try {
      dispatch({ type: assignmentTypes.EDIT_ASSIGNMENTS_REQUEST })
      apiData = await editAssignmentApi(id, editData)
      const { data, status } = apiData
      if (status === 200) {
        toastr.success('Assignment', 'Assignment Edited successfully !', {
          position: 'top-right',
        })
      }
      if (apiData && (apiData.error || !apiData.data)) {
        errorObj = apiData.error
        throw new Error()
      } else {
        dispatch({
          type: assignmentTypes.EDIT_ASSIGNMENTS_SUCCESS,
          payload: data,
        })
      }
    } catch (error) {
      handleError(error)
      dispatch({
        type: assignmentTypes.EDIT_ASSIGNMENTS_ERROR,
        payload: errorObj,
      })
    }
  }
}

// export const deleteAssignment = (id) => {
//   let apiData = {}
//   let errorObj = null
//   return async (dispatch) => {
//     try {
//       dispatch({ type: assignmentTypes.DELETE_ASSIGNMENTS_REQUEST })
//       apiData = await deleteAssignmentApi(id)
//       const { data, status } = apiData
//       if (apiData && (apiData.error || !apiData.data)) {
//         errorObj = apiData.error
//         throw new Error()
//       } else {
//         if (status === 200) {
//           toastr.success('Assignment', 'Assignment Deleted successfully !', {
//             position: 'top-right',
//           })
//           dispatch({
//             type: assignmentTypes.DELETE_ASSIGNMENTS_SUCCESS,
//             payload: id,
//           })
//         } else {
//           toastr.error('Assignment', `${data?.message}`, { position: 'top-right' })
//           errorObj = apiData.error
//           throw new Error()
//         }
//       }
//     } catch (error) {
//       handleError(error)
//       dispatch({
//         type: assignmentTypes.DELETE_ASSIGNMENTS_ERROR,
//         payload: errorObj,
//       })
//     }
//   }
// }

// export const deleteMultipleAssignment = (id) => {
//   let apiData = {};
//   let errorObj = null;
//   return async dispatch => {
//     try {
//       dispatch({ type: customerTypes.DELETE_MULTIPLE_ASSIGNMENTS_REQUEST })
//       apiData = await deleteMultipleAssignmentApi(id);
//       const { data, status } = apiData;
//       if (apiData && (apiData.error || !apiData.data)) {
//         errorObj = apiData.error;
//         throw new Error();
//       } else {
//         if (status === 200) {
//           toastr.success('Assignment', 'Assignment Deleted successfully !', { position: 'top-right', })
//           dispatch({
//             type: customerTypes.DELETE_MULTIPLE_ASSIGNMENTS_SUCCESS,
//             payload: id
//           });
//         } else {
//           toastr.error('Assignment', `${data?.message}`, { position: 'top-right', })
//           errorObj = apiData.error;
//           throw new Error();
//         }
//       }
//     } catch (error) {
//       handleError(error);
//       dispatch({
//         type: customerTypes.DELETE_MULTIPLE_ASSIGNMENTS_ERROR,
//         payload: errorObj
//       });
//     }
//   }
// }

// export const addAssignment = (image) => {
//   const formData = new FormData();
//   const productItem = image;
//   formData.append('uploadFile', image.profile_image_url[0]);
//   let apiData = {};
//   let errorObj = null;
//   return async dispatch => {
//     try {
//       dispatch({ type: customerTypes.IMAGE_ASSIGNMENTS_REQUEST })
//       apiData = await imageAssignmentApi(formData);
//       const { data } = apiData;
//       if (apiData && (apiData.error || !apiData.data)) {
//         errorObj = apiData.error;
//         throw new Error();
//       } else {
//         productItem.profile_image_url = data.imagesURL[0]
//         dispatch(handleAddAssignmentData(productItem))
//       }
//     } catch (error) {
//       handleError(error);
//       dispatch({
//         type: customerTypes.IMAGE_ASSIGNMENTS_ERROR,
//         payload: errorObj
//       });
//     }
//   }
// }

// export const editAssignment = (id, image) => {
//   const formData = new FormData();
//   const productItem = image;
//   formData.append('uploadFile', image.profile_image_url[0]);
//   let apiData = {};
//   let errorObj = null;
//   return async dispatch => {
//     try {
//       dispatch({ type: customerTypes.IMAGE_ASSIGNMENTS_REQUEST })
//       apiData = await imageAssignmentApi(formData);
//       const { data } = apiData;

//       if (apiData && (apiData.error || !apiData.data)) {
//         errorObj = apiData.error;
//         throw new Error();
//       } else {
//         productItem.profile_image_url = data.imagesURL[0]
//         dispatch(handleEditAssignment(id, productItem))
//       }
//     } catch (error) {
//       handleError(error);
//       dispatch({
//         type: customerTypes.IMAGE_ASSIGNMENTS_ERROR,
//         payload: errorObj
//       });
//     }
//   }
//   // }
// }

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
// export const customerExcelSheet = (csvFile, tenantId, setSelectedData) => {
//   if (csvFile !== undefined) {
//     // toastr.error('Assignment', 'Please select excelsheet first!', { position: 'top-right', })
//     var formData = new FormData();
//     formData.append(
//       "customerUpload",
//       csvFile,
//       csvFile.name
//     );
//   }
//   let apiData = {};
//   let errorObj = null;
//   return async dispatch => {
//     try {
//       dispatch({ type: customerTypes.POST_EXELSHEET_REQUEST })
//       apiData = await customerExcelSheetApi(formData, tenantId);
//       const { data, status } = apiData;
//         dispatch({
//           type: customerTypes.POST_EXELSHEET_SUCCESS,
//           payload: data.customer_list
//         });
//       if (status === 201) {
//         dispatch(getAssignment(1, 10, setSelectedData));
//         toastr.success('Assignment', 'All customers are imported and plans are created are imported successfully!!!', { position: 'top-right', })
//       }
//     } catch (error) {
//       if (error.response.status === 400 && Array.isArray(error.response?.data?.message)) {
//         toastr.error('Assignment', 'Problem with excel import some customer details already exist!', { position: 'top-right', })
//       }
//       if (error?.response?.status === 400 && !Array.isArray(error.response?.data?.message)) {
//         toastr.error('Assignment', 'Problem with excel import.!!', { position: 'top-right', })
//       }
//       // handleError(error);
//       dispatch({
//         type: customerTypes.POST_EXELSHEET_ERROR,
//         payload: errorObj
//       });
//     }
//   }
// }
