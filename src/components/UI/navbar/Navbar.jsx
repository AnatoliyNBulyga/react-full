import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const onLogoutHandler = () => {
        setIsAuth(false);
        window.localStorage.removeItem('auth');
    }
    return (
        <nav className="navbar">
            {
                isAuth &&  <MyButton onClick={onLogoutHandler}>Выйти</MyButton>
            }
            <div className="navbar__link">
                <NavLink to="/about">О сайте</NavLink>
                <NavLink to="/posts">Посты</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;