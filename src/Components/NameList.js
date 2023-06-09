import React from 'react';
import Person from './Person';

function NameList() {
    // const Names=['Rohan','Aayush','Aman']
    const person=[
        {
            id:101,
            name:'Raj',
            age:30,
            skill:'React'
        },
        {
            id:102,
            name:'Rajshree',
            age:27,
            skill:'Angular'
        },
        {
            id:103,
            name:'Pankaj',
            age:33,
            skill:'Fullstack'
        }
    ]
    // const nameList=Names.map(name=><h2>{name}</h2>)
    // const personList=person.map(person=>(
    //     <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>
    // ))
    const personList=person.map(person=>(
    <Person key={person.id} person={person} />
    ))
    // return <div>{nameList}</div>
    return <div>{personList}</div>
//   return (
//     <div>
//         {
//             Names.map(name=><h2>{name}</h2>)
//         }
//       <h2>{Names[0]}</h2>
//       <h2>{Names[1]}</h2>
//       <h2>{Names[2]}</h2>
//     </div>
//   )
}

export default NameList
