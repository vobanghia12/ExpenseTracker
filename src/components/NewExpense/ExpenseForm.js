import React, { useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput]= useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        setEnteredTitle(event.target.value);
        //the optimized approach if we use with one code update multiple states
        // setUserInput((prevState) =>{
        //     return{...prevState, enteredTitle: event.target.value}
        // } )
    }
    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,

        // })

        setEnteredAmount(event.target.value);
    }
    const dateChangeHander = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })

        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const newData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date : new Date(enteredDate),
        }
        props.onSaveExpenseData(newData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        
    }
    return (
    <form onSubmit= {submitHandler}>
        <div className = "new-expense__controls">
            <div className = "new-expense__controls">
                <label>Title</label>
                <input type ='text' value = {enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className = "new-expense__controls">
                <label>Amount</label>
                <input type ='number' min='0.01' step='0.01' value = {enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className = "new-expense__controls">
                <label>Date</label>
                <input type ='date' min ="2019-01-01" max="2022-12-31" value = {enteredDate} onChange={dateChangeHander}/>
            </div>
            <div className="expense__actions">
                <button type="submit">Add Expense</button>
            </div>
            <div className="expense__actions">
                <button type ="button" onClick={props.onStopEditting}>Cancel</button>
            </div>

        </div>
    </form>)
}
export default ExpenseForm;