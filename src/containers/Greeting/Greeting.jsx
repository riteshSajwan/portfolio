import React, { useRef, useEffect } from 'react';
import './Greeting.css'
import { greeting } from '../../Portfolio'
import profile from "../../images/IMG_20240525_140337_749.jpg"
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
                    <div className="text-3"> 
                        <p>
                    An Associate Developer 1 with a passion for crafting seamless user experiences through innovative web development. With over 1year of  experience in the dynamic realm of React.js , TypeScript,node.js,   I specialize in bridging the gap between frontend and backend systems.

                    🛠️ My expertise lies in API integration, where I leverage the power of Redux and Saga middleware to streamline data flow and enhance application performance.

                    💻 In addition to my frontend skills, I'm proficient in backend technologies like Node.js, allowing me to develop comprehensive solutions across the entire tech stack. Moreover, I know containerization technologies like Docker and orchestration systems like Kubernetes, ensuring scalability and reliability in deployment.

                        </p>  </div>
                    <div className="resume">
                        <a href={process.env.PUBLIC_URL + `RiteshExperienceResume.pdf`} target="_blank">See My Resume</a>
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
