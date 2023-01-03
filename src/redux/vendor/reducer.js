//this help us to display data on browser

import { vendorTypes } from './actionTypes'
import { INIT_STATE } from './initialState'
//use state under init-state and return init-state
const vendorReducer = (state = INIT_STATE, action) => {
  switch (
    action.type //use actiontype
  ) {
    // Get Vendors
    case vendorTypes.GET_VENDORS_REQUEST:
      return { ...state, vendors: { ...state.vendors, isFetching: true } }

    case vendorTypes.GET_VENDORS_SUCCESS:
      return {
        ...state,
        vendors: {
          ...state.vendors,
          list: action.payload,
          totalRecords: action.payload.total_records,
          isFetching: false,
          isError: false,
        },
      }

    case vendorTypes.GET_VENDORS_ERROR:
      return {
        ...state,
        vendors: { ...state.vendors, isFetching: false, isError: true },
      }

    // Post Vendors
    case vendorTypes.ADD_VENDORS_REQUEST:
      return { ...state, vendors: { ...state.vendors, isFetching: true } }

    case vendorTypes.ADD_VENDORS_SUCCESS:
      return {
        ...state,
        vendors: {
          list: state.vendors.list?.length
            ? [action.payload, ...state.vendors.list]
            : [action.payload],
          isFetching: false,
          isError: false,
        },
      }

    case vendorTypes.ADD_VENDORS_ERROR:
      return {
        ...state,
        vendors: { ...state.vendors, isFetching: false, isError: true },
      }

    // Put Vendors
    case vendorTypes.EDIT_VENDORS_REQUEST:
      return { ...state, vendors: { ...state.vendors, isFetching: true } }

    case vendorTypes.EDIT_VENDORS_SUCCESS:
      const index = state.vendors.list.findIndex(
        (x) => x.id === action.payload.id,
      )
      state.vendors.list.splice(index, 1, action.payload)
      return {
        ...state,
        vendors: {
          list: [...state.vendors.list],
          isFetching: false,
          isError: false,
        },
      }

    case vendorTypes.EDIT_VENDORS_ERROR:
      return {
        ...state,
        vendors: { ...state.vendors, isFetching: false, isError: true },
      }

    default:
      return state
  }
}

export default vendorReducer
