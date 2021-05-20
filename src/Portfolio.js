import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Project from "./Project";
import digital from './Images/digital.PNG';
import weather from './Images/weather.PNG';
import ttt from './Images/ttt.PNG';
import campaign from './Images/campaign.PNG';
import countdown from './Images/countdown.PNG';
import contact from './Images/contact.PNG';
import todo from './Images/todo.PNG';
import puzzle from './Images/puzzle.PNG';
import chat from './Images/chat.PNG';

export default function Portfolio() {
    let projects = [
        {link: 'https://chamce-messenger.web.app/', img: chat, title: 'Chat Now', text: 'React, Bootstrap, Laravel, Pusher'},
        {link: 'https://chamce.github.io/weather/', img: weather, title: 'Weather App', text: 'HTML, Bootstrap, JS'},
        {link: 'https://to-do-list-b6fa7.web.app/', img: todo, title: 'To Do List', text: 'React, Bootstrap'},
        {link: 'https://chamce-sliding-puzzle.web.app/', img: puzzle, title: 'Sliding Puzzle', text: 'React, Bootstrap'},
        {link: 'https://chamce.github.io/campaign/', img: campaign, title: 'Campaign', text: 'HTML, Bootstrap'},
        {link: 'https://chamce.github.io/contact-card/', img: contact, title: 'Contact Card', text: 'HTML, Bootstrap'},
        {link: 'https://chamce.github.io/tic-tac-toe/', img: ttt, title: 'Tic Tac Toe', text: 'HTML, Bootstrap, JS'},
        {link: 'https://chamce.github.io/digital-clock/', img: digital, title: 'Digital Clock', text: 'HTML, CSS, JS'},
        {link: 'https://chamce.github.io/countdown-timer/', img: countdown, title: 'Countdown Timer', text: 'HTML, CSS, JS'},
    ];

    return (
        <>
            <div className='Page overflow-auto container-fluid bg-dark pb-4 px-4'>
                <h1 className='display-2 text-white text-center fst-italic'><samp>Portfolio</samp></h1>
                <div class="row row-cols-1 row-cols-md-4 g-3">
                    { projects.map((project, index) => <Project project={project} key={index}></Project>) }
                </div>
            </div>
        </>
    );
}