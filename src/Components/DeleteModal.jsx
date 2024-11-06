import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteEmployeeRequest } from '../Actions/EmployeeActions'
import '../Css/DeleteModal.css'

const DeleteModal = ({ setDeleteModal, setEmployeeToDelete, employeeToDelete }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteEmployeeRequest(employeeToDelete.id))
    setDeleteModal(false)
  }

  const cancelDelete = () => {
    setDeleteModal(false)
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h4>ARE YOU SURE WANT TO DELETE</h4>
        <p>{employeeToDelete.name} - {employeeToDelete.designation}</p>
        <button className='delete-yes' onClick={handleDelete}>YES</button>
        <button className='delete-cancel' onClick={cancelDelete}>NO</button>
      </div>
    </div>
  )
}

export default DeleteModal
