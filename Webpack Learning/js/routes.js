"use strict";
/* MY ROUTES */

/* ES6 conversion does not work with react router.*/
var React = require("react");
var ReactDOM = require("react-dom");

import {Router, Route, browserHistory} from "react-router";
import Timer from "./timer";
import Home from "./home";

//var routes = (
//    <router>
//    <Route path = "/" component = {Home}>
//        <Route path = "timer" component = {Timer} />
//    </Route>
//    </router>
//);

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path = "/" component = {Home}>
            <Route path = "timer" component = {Timer} />
        </Route>
    </Router>
), document.getElementById("timer-holder"));
                 
//export default routes;