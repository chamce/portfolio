import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BlogPost from "./BlogPost";

export default function BlogPosts() {
    let posts = [
        {date: '1/29/21', questions: [
            {q: 'Was your first week what you expected? Why? Why not?', a: 'My first week was not what I expected. I expected us to start coding first. However, I’m glad we are going over the general workflow of software development first because I believe Git can be a big barrier of entry to software development. I also expected Git to come more naturally because I have worked with it before.'}, 
            {q: 'What are you struggling with?', a: 'I’m struggling to understand the proper workflow to use when using Git from the terminal and GitHub together.'}, 
            {q: 'What are you excited or eager to learn more about?', a: 'I’m excited to fully understand GitHub because I can see how it can be very useful when making changes to a repository, when viewing the history of a repository, and during collaborative development.'} 
        ]},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
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