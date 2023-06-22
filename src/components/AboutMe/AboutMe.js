import { Component } from "react";
import "./AboutMe.css"
import AOS from "aos"
import "animate.css"
import 'aos/dist/aos.css';
import {default as profile} from "./IMG_1262.png"
AOS.init()


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
                    <div id="flex-images">
                        <img src={require("./DSC04048.jpeg")}/>
                        <img src={require("./ebb12ca1-d00b-432c-b6a7-f2c8962a05fc.jpg")}/>
                        <img src={require("./IMG_0912.jpeg")}/>
                        <img src={require("./IMG_1895.JPG")}/>
                        <img src={require("./IMG_2348.JPG")}/>
                        <img src={require("./IMG_2533.jpeg")}/>
                        <img src={require("./IMG_2795.JPG")}/>
                        <img src={require("./IMG_7831.jpeg")}/>
                    </div>
                    <button class="flip-panel">
                        <p class="background-text">Hi! I'm Joseph Dattilo, an engineer and musician at the <span>University of Pennsylvania</span>. I grew up in Nashville and attended an all boys high school where I discovered my true passion for coding, music, rowing, language, and more.
                        Now I've officially started my college journey and completed my freshman year. I like to say that college is full of the best kind of chaos, and this was certainly the case for me as I got involved in software engineering, theatre arts, and entrepreneurship.
                        I found my home away from home when I joined the Mask and Wig theatre arts troop as the house drummer. Its hard to not become fast friends with the people that you work ten to twenty hours a week with, and the company has helped me step out of my comfort zone and become more confident as a person.</p>
                        <p class="background-text">I am so excited to study here in South Africa. Not only will it be amazing to enjoy the nature and explore the most beautiful parts of Cape Town, but this city is a major industry disruptor in software. I'll be able to work alongside companies that are making an impact
                        on the world and get practical experience with the help from professionals. I am especially excited about surfing. My friend has told me all about his experiences surfing in LA and I think it would be awesome to come home with an introduction to that skill.
                        </p>
                        <p class="center background-text"> try hovering your mouse over this text :)</p>
                    </button>
                </div>
            </div>
        )
    }
}

export default AboutMe