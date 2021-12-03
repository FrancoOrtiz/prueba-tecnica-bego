import React from 'react';
import { StatsCard } from '../StatsCard';
import { StatsDate } from '../StatsDate';
import './stats.css';
import download from '../../assets/stats/download.svg';
import arrow from '../../assets/stats/arrow.svg';

export const Stats = () => {
    return (
        <div className="stats-contain">
            <div className="stats-header">
                <h2>Statistics</h2>
                <div className="download-contain">
                    <img src={download} alt='download' />
                    <img className="arrow" src={arrow} alt="down arrow" />
                </div>
            </div>
            <StatsCard total={50} completed={15} inProgress={10} delayed={2}/>
            <StatsDate amount="13,543"/>
        </div>
    )
}
