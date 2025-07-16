import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer as addCustomerAction } from './slice/customerSlice'


const CustomerAdd = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
//   const [customer, setCustomer] = useState([])

  const addCustomer = () => {
    if (input) {
        // setCustomer((prev) => [...prev, input])
        dispatch(addCustomerAction(input))
        setInput('')
    }
  }

  return (
    <React.Fragment>
      <div>
        <h3>Add new Customer</h3>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value)
          }}
          value={input}
        />
        <button onClick={addCustomer}>Add</button>
      </div>
    </React.Fragment>
  )
}

export default CustomerAdd
