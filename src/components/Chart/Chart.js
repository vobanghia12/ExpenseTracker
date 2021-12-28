import "./Chart.css";
import React from "react";
import ChartBar from "./ChartBar";

const Chart = props => {
    const valueArray = props.dataPoints.map(data => data.value);
    return (
        <div className = "chart">
            {props.dataPoints.map((data) => 
                <ChartBar 
                key = {data.label}
                expenseValue = {data.value}
                label = {data.label}
                maxValue = {Math.max(...valueArray)}/>
            )}
        </div>
    )
}

export default Chart;