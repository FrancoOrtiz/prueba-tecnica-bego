import React from 'react';
import { Create } from '../create/Create';
import { FilterState } from '../filterState/FilterState';
import { Stats } from '../stats/Stats';
import { Upcoming } from '../upcoming/Upcoming';
import './tasks.css';

export const Tasks = () => {
    return (
        <div className="tasks">
            <Create />   
            <FilterState />
            <Upcoming />
            <Stats />
        </div>
    )
}
