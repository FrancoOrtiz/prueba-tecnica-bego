import React from 'react';
import { Create } from '../create/Create';
import { FilterState } from '../filterState/FilterState';
import './tasks.css';

export const Tasks = () => {
    return (
        <div className="tasks">
            <Create />   
            <FilterState />
        </div>
    )
}
