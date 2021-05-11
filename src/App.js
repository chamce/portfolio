import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Splash from "./Splash";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import './App.css';

export default function App() {
    
    return (
        <>
            <Router>
                <Switch>
                    {/* <Route path='/blog'>
                        <Blog></Blog>
                    </Route>
                    <Route path='/portfolio'>
                        <Portfolio></Portfolio>
                    </Route>
                    <Route path='/aboutme'>
                        <AboutMe></AboutMe>
                    </Route> */}
                    <Route path='/'>
                        <Blog></Blog>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
