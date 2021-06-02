import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Splash from "./Splash";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import BlogPosts from "./BlogPosts";

export default function Blog() {
    
    return (
        <>
            <div className='Page bg-dark'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <Splash></Splash>
                        </div>
                        <div class="carousel-item" data-bs-interval="10000">
                            <AboutMe></AboutMe>
                        </div>
                        <div class="carousel-item" data-bs-interval="300000">
                            <Portfolio></Portfolio>
                        </div>
                        <div class="carousel-item" data-bs-interval="300000">
                            <BlogPosts></BlogPosts>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>       
            </div>
        </>
    );
}