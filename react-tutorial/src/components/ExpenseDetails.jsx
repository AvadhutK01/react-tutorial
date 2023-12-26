import React from 'react'

const ExpenseDetails = (props) => {
    return (
        <>
            <div style={{ 'marginLeft': '10px' }}>
                {props.location}
            </div>
            <div className='expense-item__description'>
                <h2>{props.description}</h2>
                <div className='expense-item__price'>
                    ${props.amount}
                </div>
            </div>
        </>
    )
}

export default ExpenseDetails