import React from 'react'
import './ExpenseItem.css'
import Card from './Card'
import ExpenseDate from './ExpenseDate'


const ExpenseDetails = (props) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div style={{ 'marginLeft': '10px' }}>
                {props.location}
            </div>
            <div className='expense-item__description'>
                <h2>{props.description}</h2>
                <div className='expense-item__price'>
                    ₹ {props.amount}
                </div>
            </div>
        </Card>
    )
}

export default ExpenseDetails