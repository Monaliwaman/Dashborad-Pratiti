import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import vendorReducer from './vendor/reducer'
import layoutReducer from './layout/reducer'
import assetReducer from './asset/reducer'
import assignmentReducer from './assignment/reducer'
import employeeReducer from './employee/reducer'

const reducers = combineReducers({
  toastr: toastrReducer,
  vendor: vendorReducer,
  asset: assetReducer,
  employee: employeeReducer,
  assignment: assignmentReducer,
  layout: layoutReducer,
})
export default reducers
