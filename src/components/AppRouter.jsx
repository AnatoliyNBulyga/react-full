import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes, privateRoutes} from "./router";
import {AuthContext} from "../context";
import MyLoader from "./UI/loader/MyLoader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    const mapRoutes = routes => routes.map( ({component, path, exact}) =>
            <Route
                key={path}
                component={component}
                path={path}
                exact={exact} />
    );
    if (isLoading) {
        return <MyLoader />
    }
    return (
        <Switch>
            {
                isAuth
                ? mapRoutes(privateRoutes)
                : mapRoutes(publicRoutes)
            }
            <Redirect to={isAuth ? '/posts' : '/login'} />
        </Switch>
    );
};

export default AppRouter;