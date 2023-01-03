// @flow
import { employeeTypes } from './actionTypes'
import { INIT_STATE } from './initialState'

const employeeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // Get Employees
    case employeeTypes.GET_EMPLOYEES_REQUEST:
      return { ...state, employee: { ...state.employees, isFetching: true } }

    case employeeTypes.GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: {
          ...state.employees,
          list: action.payload,
          totalRecords: action.payload.total_records,
          isFetching: false,
          isError: false,
        },
      }

    case employeeTypes.GET_EMPLOYEES_ERROR:
      return {
        ...state,
        employees: { ...state.employees, isFetching: false, isError: true },
      }

    // Post employees
    case employeeTypes.ADD_EMPLOYEES_REQUEST:
      return { ...state, employees: { ...state.employees, isFetching: true } }

    case employeeTypes.ADD_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: {
          list: state.employees.list?.length
            ? [action.payload, ...state.employees.list]
            : [action.payload],
          isFetching: false,
          isError: false,
        },
      }

    case employeeTypes.ADD_EMPLOYEES_ERROR:
      return {
        ...state,
        employees: { ...state.employees, isFetching: false, isError: true },
      }

    // Put employees
    case employeeTypes.EDIT_EMPLOYEES_REQUEST:
      return { ...state, employees: { ...state.employees, isFetching: true } }

    case employeeTypes.EDIT_EMPLOYEES_SUCCESS:
      const index = state.employees.list.findIndex(
        (x) => x.id === action.payload.id,
      )
      state.employees.list.splice(index, 1, action.payload)
      return {
        ...state,
        employees: {
          list: [...state.employees.list],
          isFetching: false,
          isError: false,
        },
      }

    case employeeTypes.EDIT_EMPLOYEES_ERROR:
      return {
        ...state,
        employees: { ...state.employees, isFetching: false, isError: true },
      }

    default:
      return state
  }
}

export default employeeReducer
