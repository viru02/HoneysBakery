import React from "react";

const Hello= (props)=>{
    return(
        <div>
            <h1>Hello {props.name} as {props.heroName}</h1>
            {props.children}
            {/* <h1>Hello JSX</h1> */}
        </div>
    )
}

export default Hello