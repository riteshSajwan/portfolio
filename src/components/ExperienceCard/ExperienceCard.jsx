import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import "./ExperienceCard.css";
import { BrowserView, MobileView } from 'react-device-detect';

export default function ExperienceCard({ experience }) {
	return (
		<div>
			<BrowserView>
				<Fade direction="left" duration={1000}>
					<div className="experience-card">
						<div className="experience-card-left">
							{/* <img crossOrigin={"anonymous"} className="experience-roundedimg" src={school.logo} alt={school.schoolName} /> */}
						</div>
						<div className="experience-card-right">
							<h5 className="experience-text-school">{experience.companyName}</h5>
							<div className="experience-text-details">
								<h5 className="experience-text-subHeader">{experience.role}</h5>
								<p className="experience-text-duration">
								<span className="date">Start Date- </span>	{experience.start}   <span className="date">End Date-</span>  {experience.end}</p>
								
								{
									experience.desc.map((data,i)=>{
										return (<p key={i} className="experience-text-desc">{data}</p>
										);
									})
								}
							</div>
						</div>
					</div>
				</Fade>
			</BrowserView>
			<MobileView> 
				<Fade direction="bottom" duration={1000}>
					<div className="experience-card">
						<div className="experience-card-left">
							{/* <img crossOrigin={"anonymous"} className="experience-roundedimg" src={school.logo} alt={school.schoolName} /> */}
						</div>
						<div className="experience-card-right">
							<h5 className="experience-text-school">{experience.companyName}</h5>
							<div className="experience-text-details">
								<h5 className="experience-text-subHeader">{experience.role}</h5>
								<p className="experience-text-duration">
								<span className="date">Start Date- </span>	{experience.start}   <span className="date">End Date-</span>  {experience.end}</p>
								<p className="experience-text-desc">{experience.desc}</p>
							</div>
						</div>
					</div>
				</Fade>
			</MobileView>
			<BrowserView>
				<Slide direction="right" duration={1000}>
					<div className="experience-card-border"></div>
				</Slide>
			</BrowserView>
			<MobileView>
				<Fade direction="bottom" duration={1000}>
					<div className="experience-card-border"></div>
				</Fade>
			</MobileView>
		</div>
	);
}
