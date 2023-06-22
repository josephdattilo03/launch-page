import React from "react";
import { Component } from "react";
import "./ContactCard.css"
import Aos from "aos";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
Aos.init()


class ContactCard extends Component {

    render() {
        return(
            <div id="contact-wrap">
                <h1 id="talk" data-aos="fade-right" data-aos-delay="50">Lets Talk!</h1>
                <div id="social-bar" data-aos="fade-right" data-aos-delay="50">
                    <a href="https://www.linkedin.com/in/joseph-dattilo-471436243/"><AiFillLinkedin className="social"/></a>
                    <a href="https://github.com/josephdattilo03"><AiFillGithub className="social"/></a>
                </div>
                <form data-aos="fade-down" data-aos-delay="600">
                    <input id="email-input" type="text" placeholder="Email"></input>
                    <textarea id="email-body" placeholder="Write something..."></textarea>
                    <input id="send-btn" type="submit" value="Send"></input>
                </form>
            </div>
        )
    }
}

export default ContactCard
