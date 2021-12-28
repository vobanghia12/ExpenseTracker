import "./ChartBar.css";
import React from "react";

const ChartBar = props => {
    let filledValue = "0%";
    if(props.expenseValue > 0) filledValue = Math.round((props.expenseValue / props.maxValue) * 100) + "%";
    return (
        <div className="chart-bar"> 
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style = {{height: filledValue}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar;