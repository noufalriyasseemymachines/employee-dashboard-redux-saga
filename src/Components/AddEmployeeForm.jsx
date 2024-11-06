import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployeeRequest, editEmployeeRequest } from '../Actions/EmployeeActions'
import '../Css/EmployeeForm.css'  

const AddEmployeeForm = ({ visible, setVisible, employeeData,selectedEmployee,formHeading,setFormHeading }) => {
    const dispatch = useDispatch()
    const [employee, setEmployee] = useState({ name: '', designation: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (employee.id) {
            dispatch(editEmployeeRequest(employee))
        } else {
            dispatch(addEmployeeRequest(employee))
        }
        setVisible(false)
    }

    useEffect(() => {
        if (employeeData) {
            setEmployee(employeeData)
        }
    }, [employeeData])

    const handleChange = (e) => {
        const { name, value } = e.target
        setEmployee(prevState => ({ ...prevState, [name]: value }))
    }

    const handleCancel = () => {
        setVisible(false)
    }
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <h2>{formHeading ? "Edit Employee":"Add Employee"}</h2>
                    <input 
                        type='text' 
                        name='name' 
                        value={employee.name} 
                        onChange={handleChange} 
                        placeholder='Name' 
                        required 
                    />
                    <input 
                        type='text' 
                        name='designation' 
                        value={employee.designation} 
                        onChange={handleChange} 
                        placeholder='Designation' 
                        required 
                    />
                    <button type='submit'>Submit</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default AddEmployeeForm
