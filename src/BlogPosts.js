import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BlogPost from "./BlogPost";

export default function BlogPosts() {
    let posts = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]
    
    return (
        <>
            <div className='Page bg-dark text-white d-flex align-items-center justify-content-center'>
                <div className='Introduction'>
                    <h1 className='display-2 text-center pb-1'><samp>Awesome Inc Bootcamp Blog</samp></h1>
                    <div className='overflow-auto border border-white rounded' style={ {height: '269px'} }>
                        <div class="accordion" id="accordionExample" style={ {maxWidth: '989.65px'} }>
                            { posts.map((post, index) => <BlogPost post={post} index={index} key={index}></BlogPost>) }
                        </div>
                    </div>
                </div>        
            </div>
        </>
    );
}