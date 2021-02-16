import React, { useState } from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to ={`/`}>
                <img
                    className="header__logo"
                    src="https://images.unsplash.com/photo-1613328031624-95e90cd8980b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    alt="Govid" />
                    </Link>
            </div>
            <div className="header__input">
                <input 
                value={inputSearch} 
                onChange={(e) => setInputSearch(e.target.value)}
                type="text" 
                placeholder="Search" 
                className="header__inputBox" />
                <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputButton"/>
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar className="header__icon" src="https://avatars.githubusercontent.com/u/68778337?s=460&u=c7f78728017c68612913b686588d9fa96e1cb8aa&v=4" alt="Profile Pic" />
            </div>
        </div >
    )
}

export default Header
