import Chart from "./Chart";

const ExpenseChart = props => {
    
const expensesBar = [
    {label: "Jan", value: 0},
    {label: "Feb", value: 0},
    {label: "Mar", value: 0},
    {label: "April", value: 0},
    {label: "May", value: 0},
    {label: "June", value: 0},
    {label: "July", value: 0},
    {label: "Aug", value: 0},
    {label: "Sep", value: 0},
    {label: "Oct", value: 0},
    {label: "Nov", value: 0},
    {label: "Dec", value: 0},
]
    for(const expense of props.filterExpenses)
        {
            const expenseMonth = expense.date.getMonth();
            expensesBar[expenseMonth].value += expense.amount;
        }
    return (
        <Chart dataPoints = {expensesBar}/>
    )
}

export default ExpenseChart;