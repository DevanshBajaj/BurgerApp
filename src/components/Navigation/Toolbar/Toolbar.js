import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems"

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div classes={classes.Logo}>
                <Logo />
        </div>
        <nav className={classes.Toolbar.nav}>
            <NavigationItems />    
        </nav>
    </header>
);

export default toolbar;