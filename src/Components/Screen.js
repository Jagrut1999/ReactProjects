import React from "react";

class Screen extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <textarea>{this.props.displayScreenText}</textarea>
        );
    }
}

export default Screen;