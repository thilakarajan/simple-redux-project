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
      <div className="form">
        <h3 className="section-title">Add new customer</h3>
        <div className="form-row">
          <label htmlFor="customerName" className="label">
            Name
          </label>
          <input
            id="customerName"
            className="input"
            placeholder="Enter customer name"
            type="text"
            onChange={(e) => {
              setInput(e.target.value)
            }}
            value={input}
          />
        </div>
        <div className="actions">
          <button className="button primary" onClick={addCustomer}>
            Add customer
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CustomerAdd
