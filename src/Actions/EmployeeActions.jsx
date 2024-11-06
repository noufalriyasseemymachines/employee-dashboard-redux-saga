export const FETCH_EMPLOYEES_REQUEST="FETCH_EMPLOYEES_REQUEST"
export const FETCH_EMPLOYEES_SUCCESS="FETCH_EMPLOYEES_SUCCESS"
export const FETCH_EMPLOYEES_FAILURE="FETCH_EMPLOYEES_FAILURE"

// export const SET_EMPLOYEES="SET_EMPLOYEES"

export const ADD_EMPLOYEES_REQUEST="ADD_EMPLOYEES_REQUEST"
export const ADD_EMPLOYEE_SUCCESS="ADD_EMPLOYEE_SUCCESS"
export const ADD_EMPLOYEE_FAILURE="ADD_EMPLOYEE_FAILURE"

export const EDIT_EMPLOYEE_REQUEST="EDIT_EMPLOYEE_REQUEST"
export const EDIT_EMPLOYEE_SUCCESS="EDIT_EMPLOYEE_SUCCESS"
export const EDIT_EMPLOYEE_FAILURE="EDIT_EMPLOYEE_FAILURE"

export const DELETE_EMPLOYEE_REQUEST="DELETE_EMPLOYEE_REQUEST"
export const DELETE_EMPLOYEE_SUCCESS="DELETE_EMPLOYEE_SUCCESS"
export const DELETE_EMPLOYEE_FAILURE="DELETE_EMPLOYEE_FAILURE"


export const fetchEmployeeRequest=()=>({
    type:FETCH_EMPLOYEES_REQUEST
})

export const fetchEmployeeSuccess=(employees)=>({
    type:FETCH_EMPLOYEES_SUCCESS,
    payload:employees

})
export const fetchEmployeeFailure=(error)=>({
    type:FETCH_EMPLOYEES_FAILURE,
    payload:error
})

// export const setEmployeesAction=(employees)=>({
//     type:SET_EMPLOYEES,
//     payload:employees

// })

export const addEmployeeRequest=(employee)=>({
    type:ADD_EMPLOYEES_REQUEST,
    payload:employee
})

export const addEmployeeSuccess=(employee)=>({
    type:ADD_EMPLOYEE_SUCCESS,
    payload:employee
})

export const addEmployeeFailure=(error)=>({
    type:ADD_EMPLOYEE_FAILURE,
    payload:error
})


export const editEmployeeRequest=(employee)=>({
    type:EDIT_EMPLOYEE_REQUEST,
    payload:employee
})

export const editEmployeeSuccess=(employee)=>({
    type:EDIT_EMPLOYEE_SUCCESS,
    payload:employee
})

export const editEmployeeFailure=(error)=>({
    type:EDIT_EMPLOYEE_FAILURE,
    payload:error
})


export const deleteEmployeeRequest=(id)=>({
    type:DELETE_EMPLOYEE_REQUEST,
    payload:id
})

export const deleteEmployeeSuccess=(id)=>({
    type:DELETE_EMPLOYEE_SUCCESS,
    payload:id
})

export const deleteEmployeeFailure=(error)=>({
    type:DELETE_EMPLOYEE_FAILURE,
    payload:error
})