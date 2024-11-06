import React from 'react'
import EmployeeList from './Components/EmployeeList'
import AddEmployeeForm from './Components/AddEmployeeForm'
import { useState } from 'react'


const App = () => {
  const [visible,setVisible]=useState(false)
  return (
    <div>
       <EmployeeList visible={visible} setVisible={setVisible} ></EmployeeList>
       
    </div>
  )
}

export default App

