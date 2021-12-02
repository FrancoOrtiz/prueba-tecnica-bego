import React from 'react';
import { Create } from './components/create/Create';
import { Header } from './components/header/Header';
import './styles.css';

export const App = () => {
    return (
        <div>
            <Header />
            
            <Create />
        </div>
    )
}