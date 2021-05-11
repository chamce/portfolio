import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import chance from './Images/chance.jpg';

export default function AboutMe() {
    
    return (
        <>
            <div className='Page bg-dark text-white d-flex align-items-center justify-content-center'>
                <div className='Introduction'>
                    <img src={ chance } style={ { height: '300px', width: '300px' } } class="rounded-circle mx-auto d-block mb-2" alt="..."></img>
                    <h3 className='text-center fst-italic'><samp>Hi, I am Chance, nice to meet you!</samp></h3>
                    <div className='d-flex justify-content-center'>
                        <h6 className='text-center col-sm-12 col-md-5'>
                            <samp>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget libero sit amet nulla congue aliquam. Sed suscipit, ante quis pharetra viverra, velit ex sollicitudin augue, sit amet tincidunt lectus justo et ipsum. Proin ornare, sem ac ullamcorper consectetur, lectus libero egestas leo, eu ornare ipsum ligula at lectus.</samp>
                        </h6> 
                    </div>
                </div>        
            </div>
        </>
    );
}