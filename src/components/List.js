import React from 'react'

function List() {
    const names = [
         {
        name: 'aishwarya',
        age: 24
         },
         {
        name:'amrutha',
        age:20
         },
         {
        name:'aswin',
        age:20
         }
        ]
    const nameList = names.map(name  => <h2>I am {name.name}. I am {name.age}.</h2>)
    return (
        <div>
           {nameList}
        </div>
    )
}

export default List
