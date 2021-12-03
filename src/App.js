import React from 'react';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import './styles.css';

export const App = () => {
    return (
        <>
            <Header />
            <Tasks />
        </>
    )
}