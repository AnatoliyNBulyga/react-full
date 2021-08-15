import React from 'react';
import classes from './MyLoader.module.css';

const MyLoader = () => {
    return (
        <div className={classes.loader}>
            <div className={classes.loader__inner}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default MyLoader;