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
                           "I am an Associate Developer with around 2 years of experience in developing full-stack applications using React.js, TypeScript, Node.js, Express.js, and MongoDB. 
                            My expertise lies in API integration, where I leverage the power of Redux and Saga middleware to streamline data flow and enhance application performance. 
                            In addition to my frontend skills, I am proficient in backend technologies like Node.js, enabling me to develop comprehensive solutions across the entire tech stack.
                            I have hands-on experience building Node.js microservices that communicate efficiently via message brokers and interact with MongoDB for scalable and robust architectures. 
                            Additionally, I am skilled in containerizing applications using Docker.
                        </p>  </div>
                    <div className="resume">
                        <a href={process.env.PUBLIC_URL + `RiteshResume.pdf`} target="_blank">See My Resume</a>
                    </div>  
                    <div className="profileLinks">
                        <a href="https://www.linkedin.com/in/ritesh-sajwan-693a781b8/" target="_blank">LinkedIn</a>
                        <a href="https://github.com/riteshSajwan" target="_blank">GitHub</a>
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
