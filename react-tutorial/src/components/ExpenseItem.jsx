import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = () => {
    const expenseDate = new Date(2023, 23, 12);
    const LocationOfExpenditure = 'Shriwardhan';
    return (
        <table border="1" className='expense-table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='expense-item'>{expenseDate.toDateString()}</td>
                    <td >Food</td>
                    <td className='expense-item__price'>Rs 10</td>
                    <td>{LocationOfExpenditure}</td>
                </tr>
                <tr>
                    <td className='expense-item'>{expenseDate.toDateString()}</td>
                    <td>Petrol</td>
                    <td className='expense-item__price'>Rs 100</td>
                    <td>{LocationOfExpenditure}</td>
                </tr>
                <tr>
                    <td className='expense-item'>{expenseDate.toDateString()}</td>
                    <td>Movies</td>
                    <td className='expense-item__price'>Rs 200</td>
                    <td>{LocationOfExpenditure}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ExpenseItem