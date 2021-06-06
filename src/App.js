import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js';
import Welcome from './components/Welcome.js';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick'; 
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import List from './components/List';
import LifecycleA from './components/LifecycleA';

class App extends Component{
   render(){
     
   return (
       <div className="App">
        {/*CallBack*/}
         <Counter/> 

        {/*setState*/}  
         <Message/> 

        {/*Functional component, props,const,arrow */}
         <Greet name='appu' heroname='spiderman'><p>This is children hero</p></Greet>
         <Greet name='ammu' heroname='hulk'><button>Action</button></Greet>
         <Greet name='kochu' heroname='ironman'/>

        {/*Class Component*/}
         <Welcome name='appu' heroname='spiderman'/> 
         <Welcome name='ammu' heroname='hulk'/>
         <Welcome name='kochu' heroname='ironman'/>

        {/*CreateElement*/}
         <Hello/> 

        {/*Event handling in Functional component*/}
        <FunctionClick/>

        {/*Event handling in Class component*/}
        <ClassClick/>

        {/* Binding Event handler,
        1st approach binding in render,
        2nd use arrow function i render, 
        3rd binding in class constructor,
        4th class property as arrow function*/}
        <EventBind/>

        {/*Methods as props*/}
        <ParentComponent/>

        {/*Conditional Rendering*/}
        <UserGreeting/>

        {/*List Rendering*/}
        <List/>

        {/*Lifecycle Methods*/}
        <LifecycleA/>

        
        
        </div>
     );
}
} 



export default App
