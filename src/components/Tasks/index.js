import React from 'react';
import { Create } from '../Create';
import { FilterState } from '../FilterState';
import { Footer } from '../Footer';
import { Stats } from '../Stats';
import { Upcoming } from '../Upcoming';

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