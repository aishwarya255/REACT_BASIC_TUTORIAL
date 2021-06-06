import React from 'react';

//function Greet(){
  //  <h1>Hello Aishwarya</h1>
//}
const Greet = (props) => {
console.log(props)
return(
    <div>
<h1>Hello {props.name} a.k.a {props.heroname}</h1>
{props.children}
</div>
) 

}
export default Greet;