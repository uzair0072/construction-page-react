import React from "react";
import NavBar from "./components/NavBar";
import './components/NavBar.css'
import img1 from './assets/img1.png'
import img2 from './assets/img2.jpg'

export default function ConstructionPage() {
    return (
        <>
        <NavBar />
        <div class="row-1">
        <div class="column1">
            <h1 id="heading-primary"> <span id="master"> Masters </span>  of <br></br> Consistency and <br></br> <span id="quality"> Quality </span> </h1>
            <p id="top-para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos explicabo nulla
                error, aliquam eaque deserunt! Vero perferendis architecto suscipit inventore, modi quos molestiae
                consectetur aliquid rem exercitationem quam omnis.
            </p>
            <div class="button">
                <button class="btn-primary" id="btn-1">
                    Explore
                </button>
                <button class="btn-primary" id="btn-2">
                    Contact Us
                </button>
            </div>
            <div class="counter">
                <div class="counter-cl-1">
                    <h3 id="counter-hd-1"> 25,356 </h3>
                    <p id="counter-para-1"> Projects Done </p>
                </div>
                <div class="counter-cl-2">
                    <h3 id="counter-hd-2"> 15,200 </h3>
                    <p id="counter-para-2"> Buildings Done </p>
                </div>
                <div class="counter-cl-3">
                    <h3 id="counter-hd-3"> 350+ </h3>
                    <p id="counter-para-3"> Total Employees </p>
                </div>
            </div>
        </div>
        <div class="column2">
            <img id="pic1" src= {img1} alt="italy building"/>
        </div>
    </div>

    <div class="companies">
        <div class="company-cl-1">
            <h3 id="company-hd-1"> CHASE </h3>
        </div>
        <div class="company-cl-2">
            <h3 id="company-hd-2"> asana </h3>
        </div>
        <div class="company-cl-3">
            <h3 id="company-hd-3"> BuzzFeed </h3>
        </div>
        <div class="company-cl-4">
            <h3 id="company-hd-4"> Toggl </h3>
        </div>
        <div class="company-cl-5">
            <h3 id="company-hd-5"> Walmart </h3>
        </div>
    </div>
    <div class="row2">
        <div class="column3">
            <p id="bottom-para"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis minus libero dolorem
                rerum eos aut, iure ratione soluta quaerat provident dicta.</p>
            <div class="lower-btn">
                <button id="btn-3">
                    Hire Us
                </button>
            </div>
            <img id="pic2" src= {img2} alt="italy img2"/>
        </div>
        <div class="column4">
            <h1 class="heading-secondary"> Why Choose us for best construction experience </h1>
            <div class="point-1">
                <h1 id="number-1">
                    01
                </h1>
                <p id="number-1-para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta nam cum eum
                    exercitationem dolore similique nobis</p>
            </div>
            <div class="point-2">
                <h1 id="number-2">
                    02
                </h1>
                <p id="number-2-para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta nam cum eum
                    exercitationem dolore similique nobis</p>
            </div>
            <div class="point-3">
                <h1 id="number-3">
                    03
                </h1>
                <p id="number-3-para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta nam cum eum
                    exercitationem dolore similique nobis</p>
            </div>
        </div>
    </div>
        </>
    );
}