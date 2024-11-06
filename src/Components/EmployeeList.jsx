import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEmployeeRequest,
} from "../Actions/EmployeeActions";
import AddEmployeeForm from "./AddEmployeeForm";
import DeleteModal from "./DeleteModal";
import '../Css/EmployeeList.css';  

const EmployeeList = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector(
    (state) => state.employeRed
  );
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [deleteModal, setDeleteModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState();
  const [formHeading,setFormHeading]=useState(true)

  useEffect(() => {
    dispatch(fetchEmployeeRequest());
  }, [dispatch]);

  const handleAddEmployee = () => {
    setSelectedEmployee(null);
    setFormHeading(false)
    setVisible(true);
  };

  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee);
    setFormHeading(true)
    setVisible(true);
  };

  const handleModal = (employee) => {
    setEmployeeToDelete(employee);
    setDeleteModal(true);
  };

  return (
    <div className="employee-dashboard">
      <h1>Employee Dashboard</h1>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="employee-list">
          {employees.map((emp) => (
            <div className="employee-card" key={emp.id}>
              <label className="employee-details">
                <strong>{emp.name}</strong> - {emp.designation}
              </label>
              <div className="employee-buttons">
                <button className="editEmployee" onClick={() => handleEditEmployee(emp)}>Edit</button>
                <button className="deleteEmployee" onClick={() => handleModal(emp)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {error && <p>{error}</p>}
      <button className="addEmployee" onClick={handleAddEmployee}>Add Employee</button>
      {visible && 
        <AddEmployeeForm
          setVisible={setVisible}
          visible={visible}
          employeeData={selectedEmployee}
          formHeading={formHeading}
          setFormHeading={setFormHeading}
        />
      }
      {deleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          setEmployeeToDelete={setEmployeeToDelete}
          employeeToDelete={employeeToDelete}
        />
      )}
    </div>
  );
};

export default EmployeeList;
