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
                        <samp><strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</samp>
                    </div>
                </div>
            </div>
        </>
    );
}