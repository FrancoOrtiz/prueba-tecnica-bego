import React from 'react'
import './statsDate.css';

export const StatsDate = ({amount}) => {
    return (
        <div className="stats-date">
            <div className="date-header">
                <p>Day</p>
                <p>Week</p>
                <p className="active-header">Month</p>
                <p>Year</p>
            </div>
            <div className="amount-contain">
                <span className="amount">{amount}</span>
                <div className="wave-contain">
                    <img className="wave" src="./assets/statsDate/wave.png" alt="wave" />
                </div>
            </div>
            <div className="date-footer">
                <p>Jun</p>
                <p>Jul</p>
                <p>Aug</p>
                <p>Sep</p>
                <p className="active">Oct</p>
                <p>Nov</p>
            </div>
        </div>
    )
}