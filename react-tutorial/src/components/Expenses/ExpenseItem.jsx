import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

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
            <ExpensesList items={filteredExpenses} filteredYear={filteredYear} />
        </Card>
    );
}

export default ExpenseItem;
