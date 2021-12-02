import React from 'react';
import { Header } from './components/header/Header';
import { Tasks } from './components/tasks/Tasks';
import './styles.css';

export const App = () => {
    return (
        <>
            <Header />
            <Tasks />
        </>
    )
}