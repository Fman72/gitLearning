import React from "react";

class ColoredDiv extends React.Component{    
    
    render(){
        return (
                <div background-color = {this.props.backgroundColor}>{this.props.children}</div>
               )
    }
}

ColoredDiv.proptypes = {
        backgroundColor: React.PropTypes.string.isRequired
    };

export default ColoredDiv;