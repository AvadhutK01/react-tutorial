import React, { useState } from 'react'

const ExpenseForm = () => {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            amount: amount,
            date: date,
            location: location,
            description: description
        }
        console.log(expenseData);
    }

    return (
        <div>
            <h1>Expense Form</h1>
            <form>
                <label>
                    Date:
                </label>
                <input type="date" onChange={(e) => setDate(e.target.value)} />
                <br />
                <label>Amount:</label>
                <input type="number" onChange={(e) => setAmount(e.target.value)} />
                <br />
                <label>Location:</label>
                <input type="text" onChange={(e) => setLocation(e.target.value)} />
                <br />
                <label>Description:</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} />
                <br />
                <button onClick={submitHandler}>Add Expense</button>
            </form>
        </div>
    )
}

export default ExpenseForm