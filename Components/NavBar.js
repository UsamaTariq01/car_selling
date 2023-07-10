import React from 'react';
import './NavBar.css';

const Navbar = ({user_name, onNavSlideChange, onPathSignInChange, searchChange}) => {

    return (
        <div>
            <div className="logo-container">
                <img className="navbar-item-logo" src={require('../Image/elite.png')} alt=""/>
            </div>
            <div className="navbar-container">
                <div className="navbar">
                    <img className="navbar-search-icon" src={require(`../Image/search.png`)} alt=""/>
                    <input 
                        className="navbar-item-input" 
                        placeholder="Search" 
                        type="search"
                        onChange={searchChange}
                        />
                    <img
                        onClick={() => onPathSignInChange('sell')}  
                        className="navbar-sell" src={require('../Image/sell.png')} alt=""
                    />
                    <p onClick={() => onNavSlideChange('slide')} className="navbar-item-make">Make</p>
                    {/* <span className="span-account-name">
                        <img onClick={() => onPathSignInChange('signin')} className="navbar-account" src={require('../Image/account.png')} alt=""/>
                        {
                            gettingUserInfo()
                        }
                    </span> */}
                    <div id = "div-name" className="span-account-name">
                        <img onClick={() => onPathSignInChange('signin')} className="navbar-account" src={require('../Image/account.png')} alt=""/>
                            {
                                user_name
                            }
                        </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;