import React, { Component } from "react";

class Message extends Component {
    constructor(){
        super();
        this.state={
            message:'Welcome to state'
        }
    }
    changeMsg(){
        this.setState({
            message:'Thak you for subscribing'
        })
    }
    render(){
        const {message}=this.state;
        return( 
            <div>
                <h1>{message}</h1>
                <button onClick={()=>this.changeMsg()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;