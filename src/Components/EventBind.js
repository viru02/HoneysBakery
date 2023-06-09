import React, { Component } from "react";

class EventBind extends Component{
    constructor(props){
        super(props);
        this.state={
            message: 'Hello'
        }
        //3.Binding in class constructor 
        // this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message: 'GoodBuy'
    //     })
    // }
    //4.Class property in arrow function
    clickHandler=()=>{
        this.setState({
            message: 'GoodBye!'
        })
    }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/*1.Binding in render */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/*2.Arrow function in render */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind



