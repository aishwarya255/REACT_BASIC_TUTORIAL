import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
             //isLoggedIn: false
        }
    }
    
    render() {

        // if/else

        {/*if(this.state.isLoggedIn){

            return(
                <div>
                    Welcome
                </div>
            )
        } else {
            return(
                <div>
                    Welcome Guest
                </div>
            )
        }
        return (
            <div>
         <div>Welcome </div>
         <div>Welcome Guest</div>     
            </div>
       ) 


       // Element variable approach => benefit, it can be used in jsx

       let message
       if (this.state.isLoggedIn){
           message = <div>Welcome</div> 
       } else {
           message = <div>Welcome Guest</div>
       }
       return <div>{message}</div> 


       //Keep simple and readable

       return(
           this.state.isLoggedIn ? (
           <div>Welcome</div> 
           ) : ( 
           <div>Welcome Guest</div> )

       )


       //Ternary conditional operator and Short cirute operator */}

      return this.state.isLoggedIn && <div>Welcome</div>

    }
}

export default UserGreeting
