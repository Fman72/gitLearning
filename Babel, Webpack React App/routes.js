import {Route, Router, IndexRoute, browserHistory} from "react-router";

import React from "react";

import SiteHeader from "./components/siteHeader";
import AboutWrapper from "./components/wrappers/aboutWrapper.js";
import CustomersWrapper from "./components/wrappers/customersWrapper.js";
import HomeWrapper from "./components/wrappers/homeWrapper.js";




let routes = (
    <Router history = {browserHistory}>
        <Route path="/" component = {SiteHeader}>
            <IndexRoute component = {HomeWrapper}/>
            <Route path="customers" component = {CustomersWrapper}/>
            <Route path="about" component = {AboutWrapper}/>
            <Route path="home" component = {HomeWrapper}/>
        </Route>
    </Router>
);

export default routes; 