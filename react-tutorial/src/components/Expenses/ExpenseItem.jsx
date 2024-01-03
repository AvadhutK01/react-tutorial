import React, { useState } from 'react';
import './Expenses.css';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const ExpenseItem = (props) => {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear() == filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {filteredExpenses.map((expense) => (
                <ExpenseDetails
                    key={expense.id}
                    date={expense.date}
                    amount={expense.amount}
                    location={expense.location}
                    description={expense.description}
                />
            ))}
        </Card>
    );
}

export default ExpenseItem;
