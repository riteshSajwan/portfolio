import React from 'react'
import "./Experience.css"
import { experienceInfo } from './../../Portfolio';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'
const Experience = () => {
  return (
    <div className="experience" id="experience">
    <div className="max-width">
        <div className="experience-section">
          
            <h1 className="experience-heading">Experiences</h1>
            <div className="experience-card-container">
            {
                experienceInfo.experiences && experienceInfo.experiences.map((experience, i) => (
                    // <ExperienceCard experience={} />
                        <ExperienceCard experience={experience} key={i} />
                ))
            }
            </div>
        </div>
    </div>
</div>
  )
}

export default Experience