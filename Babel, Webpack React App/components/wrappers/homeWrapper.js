import React from "react";

import ColoredDiv from "../coloredDiv";
import Home from "../home";

class HomeWrapper extends React.Component{
    render(){
        return (
                <ColoredDiv backgroundColor = "red">
                <Home/>
                </ColoredDiv>
               )
    }
}

export default HomeWrapper;