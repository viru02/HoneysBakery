import React from "react";

// function Greet(){
//     return <h1>Hello World</h1>;
// }

export const Greet=({name,heroName,children})=>{
    // console.log(props);
   return(
    <div>
        <h1>Hello {name} as {heroName}</h1>
        {children}
     </div>
   )
}

// export const Greet=props=>{
//   const {name, heroName, children}=props
//   // console.log(props);
//  return(
//   <div>
//       <h1>Hello {name} as {heroName}</h1>
//       {children}
//    </div>
//  )
//  }


export default Greet