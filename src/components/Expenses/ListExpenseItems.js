import "./ListExpenseItem.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "../Chart/ExpenseChart";

function ListExpenseItems(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const yearDataHandler = (yearDataSelected) => {
    setFilterYear(yearDataSelected);
  };
  const filterExpenses = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onSaveYearData={yearDataHandler} />
      <ExpenseChart filterExpenses={filterExpenses} />
      <ExpenseList filterExpenses={filterExpenses} />
    </Card>
  );
}

export default ListExpenseItems;
