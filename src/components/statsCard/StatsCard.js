import React from 'react';
import './statsCard.css';

export const StatsCard = ({total, completed, inProgress, delayed}) => {
    return (
        <div className="stats-card">
            <div className="row">
                <div className="card-cell b-right">
                    <div className="img-contain">
                        <img className="cell-img" src="./assets/statsCard/menu.svg" alt="menu" />
                    </div>
                    <div className="cell-text">
                        <p>{total}</p>
                        <span className="cell-name">Total projects</span>
                    </div>
                </div>
                <div className="card-cell">
                    <div className="img-contain">
                        <img className="cell-img" src="./assets/statsCard/checked.svg" alt="menu" />
                    </div>
                    <div className="cell-text">
                        <p>{completed}</p>
                        <span className="cell-name">Completed</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card-cell b-right b-top">
                    <div className="img-contain">
                        <img className="cell-img" src="./assets/statsCard/flash.svg" alt="menu" />
                    </div>
                    <div className="cell-text">
                        <p>{inProgress}</p>
                        <span className="cell-name">In Progress</span>
                    </div>
                </div>
                <div className="card-cell b-top">
                    <div className="img-contain">
                        <img className="cell-img" src="./assets/statsCard/clock.svg" alt="menu" />
                    </div>
                    <div className="cell-text">
                        <p>{delayed}</p>
                        <span className="cell-name">Delayed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}