import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredLocation, setEnteredLocation] = useState('');
    const [enteredtitle, setEnteredtitle] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            amount: enteredAmount,
            date: enteredDate,
            location: enteredLocation,
            description: enteredtitle,
        }
        console.log(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <h1>Expense Form</h1>
                <div className="new-expense__controls">
                    <label>
                        Date:
                    </label>
                    <input type="date" onChange={(e) => setEnteredDate(e.target.value)} />
                    <br />
                </div>
                <div className="new-expense__controls">
                    <label>Amount:</label>
                    <input type="number" onChange={(e) => setEnteredAmount(e.target.value)} />
                    <br />
                </div>
                <div className="new-expense__controls">
                    <label>Location:</label>
                    <input type="text" onChange={(e) => setEnteredLocation(e.target.value)} />
                    <br />
                </div>
                <div className="new-expense__controls">
                    <label>Title:</label>
                    <input type="text" onChange={(e) => setEnteredtitle(e.target.value)} />
                    <br />
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm