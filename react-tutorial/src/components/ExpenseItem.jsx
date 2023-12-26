import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div style={{ 'marginLeft': '10px' }}>{props.location}</div>
            <div className='expense-item__description'>
                <h2>{props.description}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>

    )
}

export default ExpenseItem