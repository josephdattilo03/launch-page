import { Component } from "react";
import React from "react";
import "./TitleCard.css"

function Animate(props) {
    return (
        <span class="title-text" id={props.id} style={{animationDelay: props.delay}} >{props.content}</span>
    )
}

class TitleCard extends Component {
    render() {
        const name = "Joseph Dattilo"
        const animatedName = []
        for (let i = 0; i < name.length; i++) {
            animatedName.push({content:name.charAt(i), delay:2.2+.02*i})
        }
        return(
            <div>
                <div><Animate id="hi-text" content="Hi!" delay=".3s"/></div>
                    <div id="my-name-is">
                        <Animate content = "My " delay = ".6s"/>
                        <Animate content = "name " delay = ".9s"/>
                        <Animate content = "is " delay = "1.2s"/>
                        <Animate content="." delay="1.5s"/>
                        <Animate content="." delay="1.8s"/>
                        <Animate content="." delay="2.1s"/>
                    </div>
                <div>
                {animatedName.map((component, index) => (
                    <Animate id="introduction" content={component.content} delay={component.delay + "s"} />
                ))}
                </div>
            </div>
        )
    }
}

export default TitleCard