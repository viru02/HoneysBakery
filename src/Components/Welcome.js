import React, { Component } from "react";

class Welcome extends Component {
    // render(){
    //     return (
    //     <div>
    //         <h1>Welcome to {this.props.name} as {this.props.heroName}</h1>
    //         {this.props.children}
    //     </div>
    //     )
    // }
    render(){
        const {name, heroName, children}=this.props;
        // const {state1,state2}=this.state;
        return (
        <div>
            <h1>Welcome to {name} as {heroName}</h1>
            {children}
        </div>
        )
    }
}

export default Welcome