import React from 'react';
import './header.css';

export const Header = () => {
    return (
        <header className="header">
            <img src="./assets/header/back.svg" alt="arrow left"/>
            <h1 className="title">Tasks</h1>
            <img src="./assets/header/notification.svg" alt="notification" />
        </header>
    )
}
