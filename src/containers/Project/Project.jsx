import React from 'react';
import './Project.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../Portfolio';
import { BrowserView, MobileView } from 'react-device-detect';
const Project = () => {

    if (projects.display !== true) {
        return null
    }

    return (
        <div className="projects" id="projects">
            <div className="max-width">
            <BrowserView>
                <div className="projectHeader">
                    <h1 className="project-heading">{projects.title}</h1>
                </div>
                <div className="projects-cards-div">
                    {
                        projects.projectCards && projects.projectCards.map((card, i) => {
                            var cardInfo = {
                                title: card.title,
                                description: card.subtitle,
                                image: card.image,
                                footer: card.footerLink,
                                direction: card.direction
                            }
                            return (
                                <ProjectCard key={i} cardInfo={cardInfo} />
                            );
                        })
                    }
                </div>
                </BrowserView>
                <MobileView>
                <div className="projectHeader">
                    <h1 className="project-heading">{projects.title}</h1>
                    {/* <p className="project-subtitle">{projects.subtitle}</p> */}
                </div>
                <div className="projects-cards-div">
                    {
                        projects.projectCards && projects.projectCards.map((card, i) => {
                            var cardInfo = {
                                title: card.title,
                                description: card.subtitle,
                                image: card.image,
                                footer: card.footerLink,
                                direction: card.direction
                            }
                            return (
                                <ProjectCard key={i} cardInfo={cardInfo} />
                            );
                        })
                    }
                </div>
                </MobileView>
            </div>
        </div>
    )
};

export default Project;