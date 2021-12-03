import React from 'react';
import { StatsCard } from '../statsCard/StatsCard';
import './stats.css';

export const Stats = () => {
    return (
        <div className="stats-contain">
            <div className="stats-header">
                <h2>Statistics</h2>
                <div className="download-contain">
                    <img src="./assets/stats/download.svg" alt='download'></img>
                    <img className="arrow" src="./assets/stats/arrow.svg" alt="down arrow"></img>
                </div>
            </div>
            <StatsCard total={50} completed={15} inProgress={10} delayed={2}/>
        </div>
    )
}
