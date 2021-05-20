import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Splash() {
    
    return (
        <>
            <div className='Page bg-dark text-white d-flex align-items-center justify-content-center'>
                <div className='Welcome'>
                    <h1 className='text-center display-2'><samp>Chancellor Whitaker</samp></h1>
                    <h1 className='text-center display-2 fst-italic'><samp>Web Developer</samp></h1>
                </div>      
            </div>
        </>
    );
}