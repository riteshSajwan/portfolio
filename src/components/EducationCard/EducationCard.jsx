import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import "./EducationCard.css";
import { BrowserView, MobileView } from 'react-device-detect';

export default function EducationCard({ school }) {
	return (
		<div>
			<BrowserView>
				<Fade direction="left" duration={1000}>
					<div className="education-card">
						<div className="education-card-left">
							<img crossOrigin={"anonymous"} className="education-roundedimg" src={school.logo} alt={school.schoolName} />
						</div>
						<div className="education-card-right">
							<h5 className="education-text-school">{school.schoolName}</h5>
							<div className="education-text-details">
								<h5 className="education-text-subHeader">{school.subHeader}</h5>
								<p className="education-text-duration">{school.duration}</p>
								<p className="education-text-desc">{school.desc}</p>
							</div>
						</div>
					</div>
				</Fade>
			</BrowserView>
			<MobileView> 
				<Fade direction="bottom" duration={1000}>
					<div className="education-card">
						<div className="education-card-left">
							<img crossOrigin={"anonymous"} className="education-roundedimg" src={school.logo} alt={school.schoolName} />
						</div>
						<div className="education-card-right">
							<h5 className="education-text-school">{school.schoolName}</h5>
							<div className="education-text-details">
								<h5 className="education-text-subHeader">{school.subHeader}</h5>
								<p className="education-text-duration">{school.duration}</p>
								<p className="education-text-desc">{school.desc}</p>
							</div>
						</div>
					</div>
				</Fade>
			</MobileView>
			<BrowserView>
				<Slide direction="right" duration={1000}>
					<div className="education-card-border"></div>
				</Slide>
			</BrowserView>
			<MobileView>
				<Fade direction="bottom" duration={1000}>
					<div className="education-card-border"></div>
				</Fade>
			</MobileView>
		</div>
	);
}
