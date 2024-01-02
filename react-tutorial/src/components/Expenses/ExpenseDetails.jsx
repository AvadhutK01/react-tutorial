import React, { useState } from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'


const ExpenseDetails = (props) => {
    const [title, setTitle] = useState(props.description);
    const [amount, setAmount] = useState(props.amount);
    const changeTitleHandler = () => {
        setTitle('Changed Title');
    }
    const deleteHandler = () => {

    }
    const changeAmountHandler = () => {
        setAmount(100);
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div style={{ 'marginLeft': '10px' }}>
                {props.location}
            </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>
                    ₹ {amount}
                </div>
            </div>
            <button onClick={changeTitleHandler}>Change Title</button>
            <button onClick={changeAmountHandler}>Change Amount</button>
            <button onClick={deleteHandler}>Delete</button>
        </Card>
    )
}

export default ExpenseDetails