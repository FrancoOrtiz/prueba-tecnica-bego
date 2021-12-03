import React from 'react';
import './order.css';

export const Order = ({number, name, days}) => {
    return (
        <div className="order-card">
            <p className="number-order">Order #890PO90</p>
            <span className="name-order">{name}</span>
            <div className="progress-contain">
                <span className="prog-text">Progress</span>
                <span className="percentage">20%</span>
            </div>
            <div className="progress-bar"></div>
            <span className="days">{days} {days > 1 ? 'days left' :  'day left'}</span>
        </div>
    )
}
