import React from 'react';
import './About.css'
import { aboutMe } from '../../Portfolio';
import { techStack, skillsSection } from "../../Portfolio";
import SoftwareSkill from '../../components/SoftwareSkills/SoftwareSkill';
import { Fade } from 'react-awesome-reveal';
import { BrowserView, MobileView } from 'react-device-detect';
// import ProfileImg from './../../images/sandeep.jpg'

const About = () => {

    if (aboutMe.display !== true) {
        return null    
    }

    return (
        <section className="about" id="about">
            <div className="max-width ">
                <h2 className="title">{aboutMe.title}{' '}</h2>
                <div className="about-content ">
                    <div className="column-left">
                        <div className="skills-main">
                            <BrowserView>
                                <Fade direction="left" duration={1000}>
                                    <div className='groupSkill'>
                                        <p>Programming</p>
                                        <SoftwareSkill skills={skillsSection.softwareSkills1.languages} />
                                    </div>
                                    <div className='groupSkill'>
                                        <p>Web-Dev</p>
                                        <SoftwareSkill skills={skillsSection.softwareSkills1.webDev} />
                                    </div>
                                    <div className='groupSkill'>
                                        <p>Tools and Platforms</p>
                                        <SoftwareSkill skills={skillsSection.softwareSkills1.toolsAndPlatforms} />
                                    </div>
                                </Fade>
                            </BrowserView>
                            <MobileView>
                                <Fade direction="bottom" duration={1000}>
                                    <div className='groupSkill'>
                                        <p>Programming</p>
                                        <SoftwareSkill skills={skillsSection.softwareSkills1.languages} />
                                    </div>
                                    <div className='groupSkill'>
                                        <p>Web-dev</p>
                                        <SoftwareSkill skills={skillsSection.softwareSkills1.webDev} />
                                    </div>
                                    <div className='groupSkill'>
                                        <p>Tools and Platforms</p>
                                        <SoftwareSkill skills={skillsSection.softwareSkills1.toolsAndPlatforms} />
                                    </div>
                                </Fade>
                            </MobileView>  
                        </div>
                    </div>
                    <div className="column-right">
                        <div className="about-main">
                            <BrowserView>
                                <Fade direction="right" duration={1000} cascade>
                                    <div className="about-text-div">
                                        <p className='subtitle'>{aboutMe.subTitle}</p>
                                        <br />
                                        <div className='aboutme-skills'>
                                            {
                                                aboutMe.skills && aboutMe.skills.map((skills, i) => {
                                                    return (
                                                        <p key={i} className='subTitle skills-text'>{skills}</p>
                                                        );
                                                    }
                                                )
                                            }
                                        </div>
                                    </div>
                                </Fade>
                            </BrowserView>
                            <MobileView>
                                <Fade direction="bottom" duration={1000} cascade>
                                    <div className="about-text-div">
                                        <p className='subtitle'>{aboutMe.subTitle}</p>
                                        <br />
                                        <div className='aboutme-skills'>
                                            {
                                                aboutMe.skills && aboutMe.skills.map((skills, i) => {
                                                    return (
                                                        <p key={i} className='subTitle skills-text'>{skills}</p>
                                                        );
                                                    }
                                                )
                                            }
                                        </div>
                                    </div>
                                </Fade>
                            </MobileView>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;
