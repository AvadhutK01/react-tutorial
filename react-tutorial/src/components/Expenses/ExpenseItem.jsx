import React from 'react'
import './Expenses.css'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    return (
        <Card className="expenses">
            {props.items.map((expense) => (
                <ExpenseDetails
                    key={expense.id}
                    date={expense.date}
                    amount={expense.amount}
                    location={expense.location}
                    description={expense.description} />
            ))}
        </Card>

    )
}



export default ExpenseItem