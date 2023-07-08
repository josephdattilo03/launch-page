import { Component } from "react";
import "./AboutMe.css"
import AOS from "aos"
import "animate.css"
import 'aos/dist/aos.css';
import {default as profile} from "./IMG_1262.png"
import ImageGallery from 'react-image-gallery'
AOS.init()


const images = [
    {original: ""}
]

class AboutMe extends Component {
    render() {
        return(
            <div>
                <div data-aos="fade-left" data-aos-delay="100" class = "center" id="profile-wrapper">
                    <div id="taupe-box" class="p-box">
                        <div id="celadon-box" class="p-box">
                            <div id="funny-ginger-box" class="p-box">
                                <img class="p-box" id="profile-photo" src={profile}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos = "fade-right" class="center">
                    <div class="flip-panel">
                        <p class="background-text">Hi! I'm Joseph Dattilo, an engineer and musician at the <span>University of Pennsylvania</span>. Born and raised in Nashville Tennessee, I've been fortunate enough to pursue my passions in drums, rowing, chinese, and programming through my high school and college journeys.
                        At Penn, I am a backend engineer for <a href="https://pennapps.com/">PennApps</a> and the house drummer for the <a href="https://www.maskandwig.com/">Mask and Wig club</a>, which often makes my life quite chaotic. While school is a big commitment, I find comfort in the members of Mask and Wig, and on my weekends I split my time between social events and working on personal projects.
                        </p>
                        <p class="background-text">
                            When I am not taking on new challenges, you can often find me watching YouTube videos on technology, mixology, and even comedy (usually right before bed after a busy day). I like to keep up on technological advancements, and recently get my daily news from the <a href="https://tldr.tech/">TL;DR</a> newsletter. As with most software engineers I am a caffeine addict, so I've been accumulating coffee drink recipes to start making drinks for my friends this upcoming year.
                        </p>
                        <p class="background-text">I am so excited for this internship and school year, and I hope that learning new skills abroad will open new doors as I continue my studies.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe