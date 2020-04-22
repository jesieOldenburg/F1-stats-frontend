import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";

const ApplicationViews = () => {
    return(
        <React.Fragment>
            <Route exactpath="/" render={props => { return <Home/>}} />
        </React.Fragment>
    )
}