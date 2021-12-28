import ListExpenseItems from "./components/Expenses/ListExpenseItems";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, expense];
    }); // use special function form to make sure get latest state
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ListExpenseItems expenses={expenses} />
    </div>
  );
};

export default App;
