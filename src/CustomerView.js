import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteCustomer } from './slice/customerSlice'

const CustomerView = () => {
  const customers = useSelector((state) => state.customers)
  const dispatch = useDispatch()
  const deleteHandler = (index) => {
    dispatch(deleteCustomer(index))
  }
  return (
    <div>
      <h3 className="section-title">Customers</h3>
      {customers.length === 0 ? (
        <div className="empty-state">
          <p>No customers yet. Add your first customer above.</p>
        </div>
      ) : (
        <ul className="list">
          {customers.map((customer, index) => (
            <li key={`${customer}-${index}`} className="list-item">
              <span className="list-item-text">{customer}</span>
              <button
                className="button danger"
                onClick={() => {
                  deleteHandler(index)
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomerView
