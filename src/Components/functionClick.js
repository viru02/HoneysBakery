import React from "react";

function FunctionClick(){
    function clickHandler(){
        // return <h1>Hello clickHandler</h1>
        console.log('Button Clicked');
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick