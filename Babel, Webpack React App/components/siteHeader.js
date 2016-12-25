import React from "react";
import {Link} from "react-router";

class SiteHeader extends React.Component{
    render(){
        return (
                <div><Link to="/about">About</Link><Link to="/customers">Customers</Link><Link to="/home">Home</Link>
                {this.props.children}
                </div>
               )
    }
}

export default SiteHeader;