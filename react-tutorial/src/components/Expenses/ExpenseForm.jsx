import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredLocation, setEnteredLocation] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            amount: +enteredAmount,
            date: new Date(enteredDate),
            location: enteredLocation,
            description: enteredTitle,
        }
        props.onSaveExpenseData(expenseData);
        setEnteredDate('');
        setEnteredAmount('');
        setEnteredLocation('');
        setEnteredTitle('');
        setIsVisible(false);
    }

    return (
        isVisible ? (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__controls">
                        <label>
                            Date:
                        </label>
                        <input type="date" value={enteredDate} onChange={(e) => setEnteredDate(e.target.value)} />
                        <br />
                    </div>
                    <div className="new-expense__controls">
                        <label>Amount:</label>
                        <input type="number" value={enteredAmount} onChange={(e) => setEnteredAmount(e.target.value)} />
                        <br />
                    </div>
                    <div className="new-expense__controls">
                        <label>Location:</label>
                        <input type="text" value={enteredLocation} onChange={(e) => setEnteredLocation(e.target.value)} />
                        <br />
                    </div>
                    <div className="new-expense__controls">
                        <label>Title:</label>
                        <input type="text" value={enteredTitle} onChange={(e) => setEnteredTitle(e.target.value)} />
                        <br />
                    </div>
                    <div className='new-expense__actions'>
                        <button type='submit'>Add Expense</button>
                    </div>
                    <div className='new-expense__actions'>
                        <button type='submit' onClick={() => setIsVisible(false)}>Cancel</button>
                    </div>
                </div>
            </form>
        ) : (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='new-expense__actions'>
                    <button type='submit' onClick={() => setIsVisible(true)}>Add new Expense</button>
                </div>
            </div>
        )
    )
}

export default ExpenseForm