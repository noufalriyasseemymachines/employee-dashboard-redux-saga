import {
  ADD_EMPLOYEES_REQUEST,
  ADD_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAILURE,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  EDIT_EMPLOYEE_FAILURE,
  EDIT_EMPLOYEE_REQUEST,
  EDIT_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
} from "../Actions/EmployeeActions";

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_EMPLOYEES_SUCCESS:
      console.log("payload reducer",action.payload)
      return {
        ...state,
        employees:action.payload,
        loading: false,
        error: null
      };


    case FETCH_EMPLOYEES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case ADD_EMPLOYEES_REQUEST:
      return { ...state, loading: true, error: null };

    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: [...state.employees, action.payload],
        loading: false,
      };

    case ADD_EMPLOYEE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case EDIT_EMPLOYEE_REQUEST:
      return { ...state, loading: true, error: null };

    case EDIT_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === action.payload.id ? action.payload : emp
        ),
        loading: false,
        error: null,
      };

    case EDIT_EMPLOYEE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: state.employees.filter((emp) => emp.id !== action.payload),
        loading: false,
        error: null,
      };

    case DELETE_EMPLOYEE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default employeeReducer;
