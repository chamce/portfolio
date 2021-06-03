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
        {github: 'https://github.com/chamce/checkers-front-end', link: 'https://chamce-messenger.web.app/', img: chat, title: 'Chat Now', text: 'React, Bootstrap, Laravel, Pusher'},
        {github: 'https://github.com/chamce/weather', link: 'https://chamce.github.io/weather/', img: weather, title: 'Weather App', text: 'HTML, Bootstrap, JS'},
        {github: 'https://github.com/chamce/to-do-list', link: 'https://chamce-to-do.web.app/', img: todo, title: 'To Do List', text: 'React, Bootstrap'},
        {github: 'https://github.com/chamce/sliding-puzzle', link: 'https://chamce-sliding-puzzle.web.app/', img: puzzle, title: 'Sliding Puzzle', text: 'React, Bootstrap'},
        {github: 'https://github.com/chamce/campaign', link: 'https://chamce.github.io/campaign/', img: campaign, title: 'Campaign', text: 'HTML, Bootstrap'},
        {github: 'https://github.com/chamce/contact-card', link: 'https://chamce.github.io/contact-card/', img: contact, title: 'Contact Card', text: 'HTML, Bootstrap'},
        {github: 'https://github.com/chamce/tic-tac-toe', link: 'https://chamce.github.io/tic-tac-toe/', img: ttt, title: 'Tic Tac Toe', text: 'HTML, Bootstrap, JS'},
        {github: 'https://github.com/chamce/digital-clock', link: 'https://chamce.github.io/digital-clock/', img: digital, title: 'Digital Clock', text: 'HTML, CSS, JS'},
        {github: 'https://github.com/chamce/countdown-timer', link: 'https://chamce.github.io/countdown-timer/', img: countdown, title: 'Countdown Timer', text: 'HTML, CSS, JS'},
    ];

    return (
        <>
            <div className='Page overflow-auto container-fluid bg-dark pb-5 px-5'>
                <h1 className='display-2 text-white text-center fst-italic pb-3'><samp>Projects</samp></h1>
                <div class="row row-cols-1 row-cols-md-3 g-5">
                    { projects.map((project, index) => <Project project={project} key={index}></Project>) }
                </div>
            </div>
        </>
    );
}