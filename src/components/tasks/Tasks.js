import React from 'react';
import { Create } from '../create/Create';
import { FilterState } from '../filterState/FilterState';
import { Footer } from '../footer/Footer';
import { Stats } from '../stats/Stats';
import { Upcoming } from '../upcoming/Upcoming';

export const Tasks = () => {
    return (
        <div>
            <Create />   
            <FilterState />
            <Upcoming />
            <Stats />
            <Footer />
        </div>
    )
}
