// core
import React from 'react';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
// styles
import './styles/App.css';
// components
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
    return (
        <BrowserRouter>
            <nav className="navbar">
                <div className="navbar__link">
                    <NavLink to="/about">О сайте</NavLink>
                    <NavLink to="/posts">Посты</NavLink>
                </div>

            </nav>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/posts">
                <Posts/>
            </Route>
        </BrowserRouter>
    );
}

export default App;
