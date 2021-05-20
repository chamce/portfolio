import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BlogPost from "./BlogPost";

export default function BlogPosts() {
    let posts = [
        {date: "1/29/21", topics: "CLI + Git", questions: [
            {q: "Was your first week what you expected? Why? Why not?", a: "My first week was not what I expected. I expected us to start coding first. However, I’m glad we are going over the general workflow of software development first because I believe Git can be a big barrier of entry to software development. I also expected Git to come more naturally because I have worked with it before."}, 
            {q: "What are you struggling with?", a: "I’m struggling to understand the proper workflow to use when using Git from the terminal and GitHub together."}, 
            {q: "What are you excited or eager to learn more about?", a: "I’m excited to fully understand GitHub because I can see how it can be very useful when making changes to a repository, when viewing the history of a repository, and during collaborative development."},
        ]},
        {date: "2/5/21", topics: "HTML + CSS", questions: [
            {q: "What are your thoughts on pseudo coding?", a: "Pseudo coding can be very useful when getting started on a project because you can turn the project into a set of simplified instructions, making the project less intimidating. Furthermore, pseudocode is just notes, so you can refer to your pseudocode in the future."}, 
            {q: "What are you struggling with?", a: "I'm struggling to add creativity to my assignments. I'm concerned with getting my assignments finished, but I'm not concerned with adding any creative flair to my work after it has been finished. However, I do enjoy what we are learning, and I am excited to keep learning:)"}, 
            {q: "What are you excited or eager to learn more about?", a: "I'm excited to start using GitHub collaboratively. I'm eager to offer solutions in the form of pull requests to others on GitHub and I'm eager to accept or reject pull requests from others for my own repositories."},
        ]},
        {date: "2/12/21", topics: "Pseudocode + JS", questions: [
            {q: "What are your thoughts about the roles HTML, CSS, and JavaScript play in the process of rendering content and providing user experience?", a: "In general, HTML is used to add elements to a web page, CSS is used to style those elements, and JavaScript is used to provide functionality and interactivity to a web page. Each one serves a different purpose and is crucial in creating a relevant or useful web page. You must become adept with each tool if you wish to become a competent web developer."}, 
            {q: "What are some objects that your blog incorporates?", a: "When I read this question at the beginning of the week, I was a bit puzzled as to what was being asked. However, now that I have completed the pseudocode assignment which forced me to think more programmatically and in a more object-oriented sense, I can now answer the question! The entire blog itself is an object. Based on how the document is structured, each blog post contains questions and the date it was written. The blog post is an object of a weekly blog, and each weekly blog is an object of the entire blog."}, 
            {q: "What are your thoughts on pseudo coding now?", a: "Pseudo coding is crucial to understanding complex programs. I was intimidated by the pseudo code project this week because it required us to convert an everyday task into an algorithm. I was lost until I started pseudo coding. I could not see the task algorithmically until I wrote instructions for the task in english, turned the instructions into a flowchart, and then converted the flowchart into objects and a deployment of different processes."},
        ]},
        {date: "2/21/21", topics: "JS + Algorithms", questions: [
            {q: "What was one thing you liked and disliked about each of the new topics covered in Pre Work?", a: "I like working with files from the command line because of how much quicker it is than clicking through different interfaces. I like pushing my projects to GitHub because it feels like I'm saving my work forever. I like Javascript because it is fun trying to emulate real life conditions into code and figuring out algorithms. I do not have as much fun working with HTML and CSS, and I find container logic intimidating, but I'm conifident as I become more comfortable with HTML, I will enjoy it more. Agile concepts were intriguing, and I'm excited to translate them into software development."}, 
            {q: "What was helpful?", a: "Providing the documentation was crucial to my completing the assignments. I like to read through the documentation and feel I have a thorough understanding before taking on the challenges. While I feel this mindset is not foolproof, I always felt prepared for the projects!"}, 
            {q: "What hindered your progress?", a: "I was very intimidated by pseudocode. I wanted to code right away instead. This mindset caused me to have a headache over a few assignments that were quite simple once broken down."},
            {q: "How did you overcome challenges?", a: "I started pseudocoding before trying to program! Pseudocode isn't necessarily another language or defined by principles. You can pseudocode in whatever way comes naturally to you. Once this became clear, it was much easier for me to take notes on assignments, take notes on those notes, and then translate those notes into code!"},
        ]},
        {date: "2/28/21", topics: "JS + Bootstrap", questions: [
            {q: "What is the number one thing that held you back this week? Why?", a: "The number one thing that held me back this week was feeling lost when starting assignments. Lecture is helpful, but I wish I had read or at least skimmed the documentation before being introduced to the content during lecture."}, 
            {q: "What is one thing you would like to learn more about regarding JavaScript (JSON, Data Structures)?", a: "I would like to get more comfortable with object-oriented programming. Functional programming is easy to grasp, but object-oriented programming causes you to think at a higher level. I also need to become more familiar with the syntax regarding constructors and inheritance."}, 
            {q: "What is one thing you would like to learn more about regarding Bootstrap or Atomic Design?", a: "Regarding Bootstrap, I would like to get better at spacing. Most of my time on my Campaign Components projects was spent trying to get everything aligned appropriately."},
        ]},
        {date: "3/7/21", topics: "JS + APIs", questions: [
            {q: "What did you learn about that helped you understand the development process?", a: "The Git flow strategy has really helped me understand the development process. You create a local repository, push it to Github, checkout a new branch, complete a user story, push your changes to Github, complete another user story and push it to Github until you are finished with the functionality. However, development is never actually finished. You will always think of something else you could have included or somebody else will think of something you could have included in the form of a pull request or issue. Pseudocode has also helped me break software development into simpler and smaller parts."}, 
            {q: "What does it mean to develop good code?", a: "Good code is usually clear and concise. You can get rid of unnecessary lines of code by taking advantage of libraries and APIs that have already done the mundane work for you. Clear code has plenty of comments so you or anybody else could revisit the project in the future and make changes. Good code also uses efficient algorithms so the program isn't using unnecessary computing power."}, 
            {q: "What does it mean to be a good developer?", a: "A good developer produces good code in a timely manner. They are conscious of the libraries and APIs they can use, the object-oriented structure of their program, how to comment their code, and how to use algorithms to make their code efficient. Good developers are also not stubborn or afraid to ask questions when they are stumped. Good developers must also be willing to research their own questions or they will never be independent."},
            {q: "What is one thing that programmers hate doing?", a: "Programmers hate asking for help! They believe it is a sign of weakness or defeat. However, if you ever want to deliver software in a timely manner, you must accept you do not know everything, and utilize your resources to your advantage."},
        ]},
        {date: "3/15/21", topics: "JS + MVC", questions: [
            {q: "What are three ideas you might want to do for your final project?", a: "I would like to produce something I can use in my daily life. I use Spotify daily to listen to music, however, Spotify can be very difficult if you are looking for something new. Spotify is very good at keeping you locked in a bubble. Spotify will rarely recommend me something I haven't heard before or something I haven't already rejected. I would like to be able to use APIs and a database on my machine to make a program that recommends obscure music to me from YouTube or other sources. Other ideas I would like to see realized are a statistics recorder for when I play in Smash Bros tournaments and some kind of reminder system to keep me organized."}, 
            {q: "Why do you see JavaScript useful or hard to use?", a: "Javascript is useful because it gives web pages functionality or makes web pages dynamic. With just HTML and CSS, you can make a pretty website, but the user cannot interact with the website and you interact with the user's data."}, 
            {q: "What aspects about JavaScript are you interested in learning more about?", a: "I want to learn more about objects, class interaction, and algorithms. I would like to be able to write efficient code and organized code that is reusable."},
            {q: "What are your thoughts about the MVC Design Pattern?", a: "The MVC design pattern is a great way to organize our code and segment our projects. It is easier to pseudocode a project when you look at the code from the perspective of model, view, controller. What data changes state, what goes in the interface, and what functions will my project require? MVC also encourages reusable code."},
            {q: "What are some other Design Patterns?", a: "A pattern I like to follow when programming is to divide the application into states. What happens on load, what can happen next, what can then happen, what happens in the end or before the program can end? If I have pseudocoded the project from beginning to end and was conscious of the data structures required, I can sequentially program states of the application until I am finished. However, this pattern of programming neglects the actual structure of the code meaning you may be typing more code than necessary or may not produce reusable code."},
        ]},
        {date: "3/21/21", topics: "React + LStorage", questions: [
            {q: "Why do you see JavaScript Frameworks and Libraries useful or hard to use?", a: "Javascript Frameworks are hard to use because it's almost like learning a new programming language. However, they are useful because they prevent you from writing code that has already been written for you and they allow you more time during the planning stages of a project. Some Frameworks encourage organization and therefore allow easier translation from pseudocode to code."}, 
            {q: "What Frameworks or Libraries are you interested in learning more about?", a: "I would like to learn more about built-in Javascript Libraries. Like Frameworks, built-in Libraries prevent you from writing code that has already been written for you, giving you more time to spend on unique algorithmic problems that cannot be provided."}, 
            {q: "Find one emerging JavaScript tool that you would like to learn more about or use in your final project.", a: "I would like to learn more about APIs like Axios, so in my final project I can take information from other sources and use it for my own purposes. For example, I would like to be able to take information regarding my Smash tournament sets from the website they are hosted on and use that information in my own statistical analysis program."},
        ]},
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
                    <h1 className='display-2 text-center'><samp>Awesome Inc Bootcamp Blog</samp></h1>
                    <h1 className='display-5 text-center pb-1 fst-italic'><samp>Spring 2021</samp></h1>
                    <div className='overflow-auto border border-white rounded' style={ {height: '321px'} }>
                        <div class="accordion" id="accordionExample" style={ {maxWidth: '989.65px'} }>
                            { posts.map((post, index) => <BlogPost post={post} index={index} key={index}></BlogPost>) }
                        </div>
                    </div>
                </div>        
            </div>
        </>
    );
}