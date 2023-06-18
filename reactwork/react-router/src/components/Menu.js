import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
function menu(props) {
    return (
        <div>
            <ul className="menu">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>

        </div>
    );
}

export default menu;