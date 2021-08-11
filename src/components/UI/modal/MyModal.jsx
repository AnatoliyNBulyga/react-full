import React from 'react';
import classes from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {
    const onCloseModalHandler = () => {
        setVisible(false)
    }
    const rootClass = [classes.my_modal];
    if (visible) {
        rootClass.push(classes.active);
    }
    return (
        <div className={rootClass.join(' ')} onClick={onCloseModalHandler}>
            <div className={classes.my_modal_content} onClick={ e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;