import React from 'react';

import '../SideDrawer/DrawerToggleButton';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const Navbar = props => (
        <header className="bar">
            <nav className="bar__navigation">
                <div className="bar_logo"><a href="/">KS</a></div>
                <div className="spacer" />
                <div class="toolbar__toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="bar_navigation-items">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/interests">Interests</a></li>
                    </ul>
                </div>
            </nav>
        </header>
);
export default Navbar

