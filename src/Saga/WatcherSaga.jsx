import { all } from "redux-saga/effects";
import { watchEmployeeActions } from "./EmployeeSaga";


export default function* watcherSaga(){
    yield all([
        watchEmployeeActions()
    ])
}