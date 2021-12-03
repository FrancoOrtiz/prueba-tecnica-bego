import React from 'react';
import './header.css';
import back from '../../assets/header/back.svg';
import notification from '../../assets/header/notification.svg';

export const Header = () => {
    return (
        <header className="header">
            <img src={back} alt="arrow left"/>
            <h1 className="title">Tasks</h1>
            <img src={notification} alt="notification" />
        </header>
    )
}
