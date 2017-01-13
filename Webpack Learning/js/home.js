require("./login");

import React from "react";

import {Link} from "react-router";

var Home = React.createClass({
    render(){
        return(<div><h1>Your on the home page! </h1>
               <Link to = "/timer">timer</Link>
               {this.props.children}
               </div>
              
              )
    }
});

export default Home;