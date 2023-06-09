import React, { Component } from 'react'

class ConditionalStat extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    //Short Circuit Operator
    return this.state.isLoggedIn && <div>Welcome Varun</div>

    //Ternary Conditional operator
    // return(
    //     this.state.isLoggedIn?
    //     <div>Welcome Varun</div>:
    //     <div>Welcome Guest</div>
    // )
   
    //Element Variables
    // let message
    // if(this.state.isLoggedIn){
    //     message= <div>Welcome Varun</div>
    // }
    // else{
    //     message= <div>Welcome Guest</div>
    // }
    // return<div>{message}</div>

    //if-else Method
    // if(this.state.isLoggedIn){
    //     return <div>Welcome Varun</div>
    // }
    // else{
    //     return <div>Welcome Guest</div>
    // }
    // return (
    //   <div>
    //     <h1>Welcome Varun</h1>
    //     <h1>Welcome Guest</h1>
    //   </div>
    // )
  }
}

export default ConditionalStat
