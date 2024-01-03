import React from 'react'
import ExpenseDetails from './ExpenseDetails';
import './ExpensesList.css'

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found for year {props.filteredYear}</h2>
    }

    return <ul className='expenses-list'>
        {
            props.items.map((expense) => (
                <ExpenseDetails
                    key={expense.id}
                    date={expense.date}
                    amount={expense.amount}
                    location={expense.location}
                    description={expense.description}
                />
            ))
        }
        {props.items.length === 1 && <p style={{ 'color': 'green' }}>Only single expense here Please add more...</p>}
    </ul>
}

export default ExpensesList