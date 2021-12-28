import "./ExpenseList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.filterExpenses.length === 0)
    return (<h2 className="expenses-list__fallback">No expenses is found!</h2>);

  return (
    <ul className="expenses-list">
      {props.filterExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
