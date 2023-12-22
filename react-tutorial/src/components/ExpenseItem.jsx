import React from 'react'

const ExpenseItem = () => {
    return (
        <div>
            <div>Expense Items</div>
            <table border="1">
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>Food</td>
                    <td>Rs 10</td>
                </tr>
                <tr>
                    <td>Petrol</td>
                    <td>Rs 100</td>
                </tr>
                <tr>
                    <td>Movies</td>
                    <td>Rs 200</td>
                </tr>
            </table>
        </div>
    )
}

export default ExpenseItem