import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function BlogPost(props) {

    return (
        <>
            <div class="accordion-item">
                <h2 class="accordion-header" id={"heading" + props.index}>
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + props.index} aria-expanded="false" aria-controls={"collapse" + props.index}>
                        <samp>Week {props.index + 1}</samp>
                    </button>
                </h2>
                <div id={"collapse" + props.index} class="accordion-collapse collapse bg-dark" aria-labelledby={"heading" + props.index} data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <samp>
                            <h3>{props.post.date}</h3>
                            { props.post.questions.map((question, index) => <><p className='fst-italic text-info'>{(index + 1) + '. ' + question.q}</p><p>{question.a}</p></>) }
                        </samp>
                    </div>
                </div>
            </div>
        </>
    );
}