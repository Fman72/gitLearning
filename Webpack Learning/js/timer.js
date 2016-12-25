require("./login");

import React from "react";

var Timer = React.createClass({
    
    interval: 1,
        
    getInitialState(){
        return {time: 0};
    },
        
    tick(){
        this.setState({time: this.state.time + this.interval});
    },
    
    componentDidMount(){
        setInterval(this.tick, this.interval * 1000);
    },
        
    render(){
        return(<div><h1>{this.state.time}</h1></div>)
    }
});

export default Timer;