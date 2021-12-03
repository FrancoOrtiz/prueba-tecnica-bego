import React from 'react';
import { Order } from '../order/Order';
import './upcoming.css';

export const Upcoming = () => {
    return (
        <>
            <p className="upcoming-title">Upcoming Tasks <span className="remaining">5</span></p>
            <div className="orders">
                <Order name="Bryan Williams" days='1 day left'/>
                <Order name="Marcus Klaus" days='3 days left'/>
            </div>
        </>
    )
}
