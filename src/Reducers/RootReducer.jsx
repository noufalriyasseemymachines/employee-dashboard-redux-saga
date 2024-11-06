import { combineReducers } from "redux";

import employeeReducer from "./EmployeeReducer";

const rootReducer=combineReducers({
    employeRed:employeeReducer
})
export default rootReducer;