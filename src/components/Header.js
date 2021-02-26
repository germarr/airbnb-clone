import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import LanguageIcon from "@material-ui/icons/Language"
import { Avatar } from "@material-ui/core"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png" 
                    alt="" 
                    className="header__icon"/>
            </Link>
            <div className="header__center">
                <input type="text"/>
                <SearchIcon />    
            </div> 
            <div className="header__right">
                <p>Become a Host</p>
                <LanguageIcon/>
                <ExpandMoreIcon />
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
