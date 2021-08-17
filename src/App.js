// core
import React, {useState, useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
// styles
import './styles/App.css';
// components
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (window.localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false);
    }, [isAuth]);
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
