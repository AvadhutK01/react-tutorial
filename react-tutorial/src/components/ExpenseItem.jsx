import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails
                amount={props.amount}
                location={props.location}
                description={props.description} />
        </div>

    )
}

export default ExpenseItem