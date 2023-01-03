// @flow
import { assignmentTypes } from './actionTypes'
import { INIT_STATE } from './initialState'

const assignmentReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // Get Assignments
    case assignmentTypes.GET_ASSIGNMENTS_REQUEST:
      console.log('6734214216', action.payload)
      return {
        ...state,
        assignments: { ...state.assignments, isFetching: true },
      }

    case assignmentTypes.GET_ASSIGNMENTS_SUCCESS:
      return {
        ...state,
        assignments: {
          ...state.assignments,
          list: action.payload,
          // totalRecords: action.payload.total_records,
          isFetching: false,
          isError: false,
        },
      }

    case assignmentTypes.GET_ASSIGNMENTS_ERROR:
      return {
        ...state,
        assignments: { ...state.assignments, isFetching: false, isError: true },
      }

    // Post Assignments
    case assignmentTypes.ADD_ASSIGNMENTS_REQUEST:
      return {
        ...state,
        assignments: { ...state.assignments, isFetching: true },
      }

    case assignmentTypes.ADD_ASSIGNMENTS_SUCCESS:
      return {
        ...state,
        assignments: {
          list: state.assignments.list?.length
            ? [action.payload, ...state.assignments.list]
            : [action.payload],
          isFetching: false,
          isError: false,
        },
      }

    case assignmentTypes.ADD_ASSIGNMENTS_ERROR:
      return {
        ...state,
        assignments: { ...state.assignments, isFetching: false, isError: true },
      }

    // Put Assignments
    case assignmentTypes.EDIT_ASSIGNMENTS_REQUEST:
      return {
        ...state,
        assignments: { ...state.assignments, isFetching: true },
      }

    case assignmentTypes.EDIT_ASSIGNMENTS_SUCCESS:
      const index = state.assignments.list.findIndex(
        (x) => x.id === action.payload.id,
      )
      state.assignments.list.splice(index, 1, action.payload)
      return {
        ...state,
        assignments: {
          list: [...state.assignments.list],
          isFetching: false,
          isError: false,
        },
      }

    case assignmentTypes.EDIT_ASSIGNMENTS_ERROR:
      return {
        ...state,
        assignments: { ...state.assignments, isFetching: false, isError: true },
      }

    // Delete Assignments
    // case assignmentTypes.DELETE_ASSIGNMENTS_REQUEST:
    //   return { ...state, assignments: { ...state.assignments, isFetching: true } }

    // case assignmentTypes.DELETE_ASSIGNMENTS_SUCCESS:
    //   const assignments = state.assignments.list.filter(
    //     (assignment) => assignment.id !== action.payload,
    //   )
    //   return {
    //     ...state,
    //     assignments: { list: assignments },
    //     isFetching: false,
    //     isError: false,
    //   }

    // case assignmentTypes.DELETE_ASSIGNMENTS_ERROR:
    //   return {
    //     ...state,
    //     assignments: { ...state.assignments, isFetching: false, isError: true },
    //   }

    // case assignmentTypes.DELETE_MULTIPLE_ASSIGNMENTS_REQUEST:
    // 	return { ...state, assignments: { ...state.assignments, isFetching: true } };

    // case assignmentTypes.DELETE_MULTIPLE_ASSIGNMENTS_SUCCESS:
    // 	const assignments1 = state.assignments.list.filter((assignment) => !action.payload.includes(assignment._id))
    // 	return { ...state, assignments: { list: assignments1 }, isFetching: false, isError: false }

    // case assignmentTypes.DELETE_MULTIPLE_ASSIGNMENTS_ERROR:
    // 	return {
    // 		...state,
    // 		assignments: { ...state.assignments, isFetching: false, isError: true }
    // 	};

    // Get Route name
    // case assignmentTypes.GET_ROUTENAME_REQUEST:
    // 	return { ...state, route: { ...state.route, isFetching: true } };

    // case assignmentTypes.GET_ROUTENAME_SUCCESS:
    // 	return {
    // 		...state,
    // 		route: { ...state.route, list: action.payload, isFetching: false, isError: false }
    // 	};

    // case assignmentTypes.GET_ROUTENAME_ERROR:
    // 	return {
    // 		...state,
    // 		route: { ...state.route, isFetching: false, isError: true }
    // 	};

    // Get Excel sheet
    // case assignmentTypes.POST_EXELSHEET_REQUEST:
    // 	return { ...state, excelData: { ...state.excelData, isFetching: true } };

    // case assignmentTypes.POST_EXELSHEET_SUCCESS:
    // 	return {
    // 		...state,
    // 		excelData: { ...state.excelData, list: action.payload, isFetching: false, isError: false }
    // 	};

    // case assignmentTypes.POST_EXELSHEET_ERROR:
    // 	return {
    // 		...state,
    // 		excelData: { ...state.excelData, isFetching: false, isError: true }
    // 	};

    default:
      return state
  }
}

export default assignmentReducer
