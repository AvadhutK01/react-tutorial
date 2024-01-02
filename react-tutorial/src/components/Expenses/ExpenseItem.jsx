import React, { useState } from 'react'
import './Expenses.css'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const ExpenseItem = (props) => {
    const [filterdYear, setFilterdYear] = useState(new Date().getFullYear());

    const filterChangeHandler = (selectedYear) => {
        setFilterdYear(selectedYear);
    }
    return (
        <Card className="expenses">
            {props.items.map((expense) => (
                <>
                    <ExpensesFilter selected={filterdYear} onChange={filterChangeHandler} />
                    <ExpenseDetails
                        key={expense.id}
                        date={expense.date}
                        amount={expense.amount}
                        location={expense.location}
                        description={expense.description} />
                </>
            ))}
        </Card>

    )
}



export default ExpenseItem