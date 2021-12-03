import React from 'react';
import { Order } from '../Order';
import './upcoming.css';

export const Upcoming = () => {
    return (
        <div className="upcoming-box">
            <p className="upcoming-title">Upcoming Tasks <span className="remaining">5</span></p>
            <div className="orders">
                <div className="scroll-container">
                    <Order name="Bryan Williams" days={1}/>
                    <Order name="Marcus Klaus" days={3}/>
                </div>
            </div>
        </div>
    )
}
