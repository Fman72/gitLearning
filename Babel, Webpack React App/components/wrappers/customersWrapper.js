import React from "react";

import ColoredDiv from "../coloredDiv";
import Customers from "../customers";

class CustomersWrapper extends React.Component{
    render(){
        return (
                <ColoredDiv backgroundColor = "yellow">
                <Customers/>
            </ColoredDiv>
               )
    }
}

export default CustomersWrapper;