import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Project(props) {

    return (
        <>
            <div class="col">
                <div class="card bg-dark text-white border border-secondary h-100">
                    <a href={ props.project.link } target='_blank' rel='noreferrer'><img src={ props.project.img } class="card-img-top" alt="..."></img></a>
                    <div class="card-body text-center">
                        <a href={ props.project.github } target='_blank' rel='noreferrer' className='title'>
                            <h4 class="card-title"><samp>{ props.project.title }</samp></h4>
                        </a>
                        <p class="card-text fst-italic"><samp>{ props.project.text }</samp></p>
                    </div>
                </div>
            </div>
        </>
    );
}