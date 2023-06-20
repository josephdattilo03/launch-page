import { Component } from "react";
import React from "react";
import "./TitleCard.css"

function DelayedAnimation(props) {
    return (
        <span class="title-text" id={props.id} style={{animationDelay: props.delay}} >{props.content}</span>
    )
}

class TitleCard extends Component {
    render() {
        const name = "Joseph Dattilo"
        const html = []
        for (let i = 0; i < name.length; i++) {
            html.push({content:name.charAt(i), delay:2.2+.02*i})
        }
        return(
            <div>
                <div><DelayedAnimation id="hi-text" content="Hi!" delay=".3s"/></div>
                    <div id="my-name-is">
                        <DelayedAnimation content = "My " delay = ".6s"/>
                        <DelayedAnimation content = "name " delay = ".9s"/>
                        <DelayedAnimation content = "is " delay = "1.2s"/>
                        <DelayedAnimation content="." delay="1.5s"/>
                        <DelayedAnimation content="." delay="1.8s"/>
                        <DelayedAnimation content="." delay="2.1s"/>
                    </div>
                <div>
                {html.map((component, index) => (
                    <DelayedAnimation id="introduction" content={component.content} delay={component.delay + "s"} />
                ))}
                </div>
            </div>
        )
    }
}

export default TitleCard