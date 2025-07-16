import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteCustomer } from './slice/customerSlice'

const CustomerView = () => {
  const customers = useSelector((state) => state.customers)
  const dispatch=useDispatch()
  const deleteHandler = (index) => {
    dispatch(deleteCustomer(index));
  }
  return (
    <div>
      <h3>Customer List</h3>
      <ul style={{ listStyle: 'none' }}>
        {customers.map((customer, index) => (
          <li>
            {customer}{' '}
            <button
              onClick={() => {
                deleteHandler(index)
              }}
            >
              delete
            </button>{' '}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CustomerView
