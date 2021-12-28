import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditting, setEditting]= useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString,
        }
        props.onAddExpense(expenseData);
        setEditting(false);
    }
    const addNewExpenseHandler = () => 
    {
        setEditting(true);
    }
    const stopEdittingHandler = () =>{
        setEditting(false)
    }
    return (
        <div className = "new-expense">
            {!isEditting && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
            {isEditting &&  <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onStopEditting = {stopEdittingHandler}/>}
        </div>
    )
}

export default NewExpense; 