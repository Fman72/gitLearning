import React from "react";

import ColoredDiv from "../coloredDiv";
import About from "../about";

class AboutWrapper extends React.Component{
    render(){
        return (
                <ColoredDiv backgroundColor = "green">
                <About/>
            </ColoredDiv>
               )
    }
}

export default AboutWrapper;