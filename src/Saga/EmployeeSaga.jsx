
import { takeLatest, call, put } from 'redux-saga/effects';
import { ADD_EMPLOYEES_REQUEST, ADD_EMPLOYEE_FAILURE, ADD_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAILURE, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS, EDIT_EMPLOYEE_FAILURE, EDIT_EMPLOYEE_REQUEST, EDIT_EMPLOYEE_SUCCESS, FETCH_EMPLOYEES_FAILURE, FETCH_EMPLOYEES_REQUEST, FETCH_EMPLOYEES_SUCCESS } from '../Actions/EmployeeActions';

const employeeUrl="https://6580190d6ae0629a3f54561f.mockapi.io/api/v1/employee"

const fetchData=async (url,options)=>{
    const response=await fetch(url,options);
    if(!response.ok){
        throw new Error("Api request failed")
    }
    return await response.json()
};

function* fetchEmployeesSaga() {
    try {
      const employees = yield call(() => fetchData(employeeUrl));
      yield put({ type: FETCH_EMPLOYEES_SUCCESS, payload: employees });
    } catch (error) {
      yield put({ type: FETCH_EMPLOYEES_FAILURE, payload: error.message });
    }
  }

  function* addEmployeeSaga(action) {
    try {
      const newEmployee = yield call(() =>
        fetchData(employeeUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(action.payload),
        })
      );
      yield put({ type: ADD_EMPLOYEE_SUCCESS, payload: newEmployee });
    } catch (error) {
      yield put({ type: ADD_EMPLOYEE_FAILURE, payload: error.message });
    }
  }


  function* editEmployeeSaga(action) {
    try {
      const updatedEmployee = yield call(() =>
        fetchData(`${employeeUrl}/${action.payload.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(action.payload),
        })
      );
      yield put({ type: EDIT_EMPLOYEE_SUCCESS, payload: updatedEmployee });
    } catch (error) {
      yield put({ type: EDIT_EMPLOYEE_FAILURE, payload: error.message });
    }
  }

  function* deleteEmployeeSaga(action) {
    try {
      yield call(() =>
        fetchData(`${employeeUrl}/${action.payload}`, { method: 'DELETE' })
      );
      yield put({ type: DELETE_EMPLOYEE_SUCCESS, payload: action.payload });
    } catch (error) {
      yield put({ type: DELETE_EMPLOYEE_FAILURE, payload: error.message });
    }
  }


  export function* watchEmployeeActions() {
    yield takeLatest(FETCH_EMPLOYEES_REQUEST, fetchEmployeesSaga);
    yield takeLatest(ADD_EMPLOYEES_REQUEST, addEmployeeSaga);
    yield takeLatest(EDIT_EMPLOYEE_REQUEST, editEmployeeSaga);
    yield takeLatest(DELETE_EMPLOYEE_REQUEST, deleteEmployeeSaga);
  }

























// function* fetchEmployeeSaga(){
//     try {
//         const response=yield call(()=>axios.get(employeeUrl));
//         yield put ({type:FETCH_EMPLOYEES_SUCCESS,payload:response.data});

//     } catch (error) {
//         yield put({type:FETCH_EMPLOYEES_FAILURE,payload:error})
//     }
// }


// function* addEmployeeSaga(action){
//     try {
//         const response=yield call (()=>axios.post(employeeUrl,action.payload))
//         yield put({type:ADD_EMPLOYEE_SUCCESS,payload:response.data})
//     } catch (error) {
//         yield put({type:ADD_EMPLOYEE_FAILURE,payload:error})
//     }
// }

// function* editEmployeeSaga(action){
//     try {
//         const response=yield call (()=>axios.put(`${employeeUrl}/${action.payload.id}`,action.payload))
//         yield put({type:EDIT_EMPLOYEE_SUCCESS,payload:response.data})

//     } catch (error) {
//         yield put({type:EDIT_EMPLOYEE_FAILURE,payload:error})
//     }
// }

// function* deleteEmployeeSaga(action){
//     try {
//         const response=yield call (()=>axios.delete(`${employeeUrl}/${action.payload}`))
//         yield put({type:DELETE_EMPLOYEE_SUCCESS,payload:action.payload})
//     } catch (error) {
//         yield put ({type:DELETE_EMPLOYEE_FAILURE,payload:error})
//     }
// }

// function* fetchEmployees(){
//     const response=yield call (fetch,employeeUrl);
//     const data=yield response.json();
//     yield put(setEmployeesAction(data));
// }

// function* addEmployees(action){
//     yield call (fetch,employeeUrl,{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(action.payload)
//     })
//     yield put (fetchEmployeeAction())
// }

// function* editEmployees(action){
//     yield call (fetch,`${employeeUrl}/${action.payload.id}`,{
//         method:'PUT',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(action.payload)
//     })
//     yield put (fetchEmployeeAction())
// }

// function* deleteEmployee(action){
//     yield call (fetch,`${employeeUrl}/${action.payload.id}`,{
//         method:'DELETE',

//     })
//     yield put (fetchEmployeeAction())
// }


// export function* watcherEmployeeActions(){
//     yield takeLatest(FETCH_EMPLOYEES,fetchEmployees)
//     yield takeLatest(ADD_EMPLOYEE,addEmployees)
//     yield takeLatest(EDIT_EMPLOYEE,editEmployees)
//     yield takeLatest(DELETE_EMPLOYEE,deleteEmployee)
// }