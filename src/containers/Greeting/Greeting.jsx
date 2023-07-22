import React, { useRef, useEffect } from 'react';
import './Greeting.css'
import { greeting } from '../../Portfolio'
import profile from "../../images/DSC_3965-min.jpg"
// import profile from "../../images/profile.jpg"





const Greeting = () => {

    if (greeting.display !== true) {
        return null
    }

    return (
        <section className="home" id="home">
            <div className="max-width homeContainer">
                <div className="home-content">
                    <div className="text-1">{greeting.title}</div>
                    <div className="text-2">{greeting.username}</div>
                    <div className="text-3"> <p>An accomplished engineering graduate in Information Technology(2023) with a diverse range of skills, I am excited to secure an entry-level position where I can enhance my knowledge and proficiency as a software developer or full-stack web developer.</p>  </div>
                    <div className="resume">
                        <a href={process.env.PUBLIC_URL + `Ritesh's Resume (1).pdf`} target="_blank">See My Resume</a>
                    </div>  
                    <div className="profileLinks">
                        <a href="https://www.linkedin.com/in/ritesh-sajwan-693a781b8/" target="_blank">LinkedIn</a>
                        <a href="https://github.com/Ritesh9211" target="_blank">GitHub</a>
                    </div>
                        
                </div>
                    <div className="homeImageContainer">
                        <img className='homeImage' src={profile} alt="" />
                    </div>
            </div>
        </section>
    )
};

export default Greeting;
