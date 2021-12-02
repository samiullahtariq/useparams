import React from "react";
import { Route, Switch } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Search from "./Search";
import Users from "./Users";
import Navbar from "./Navbar";
const App = () => {

    const Name =()=>{
        return <h1>This is a Name Page</h1>
    }
    return (
        <>
            <Navbar/>
            <div>
           <Switch >
               <Route exact path="/" component={()=>{return <Home/>}}/>
               <Route exact path="/contact" render={()=>{return <Contact text="Contact"/>}}/>
               <Route path="/contact/name" component={Name}/>
               <Route path="/about" component={About}/> 
               <Route path="/users/:name/:lname" component={Users}/> 
               <Route path="/search" component={Search}/> 
           </Switch>
           </div> 
        </>
    )
}

export default App
