import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../Portfolio";

export default function SoftwareSkill({ skills }) {
	return (
		<div className="software-skills-main-div">
			<ul className="dev-icons">
				{
					skills.map((skills, i) => {
						return (
							<li key={i} className="software-skill-inline" name={skills.skillName}>
								<img className="skillimage" src={skills.imgSrc} width="50px" height="50px"  />
								<p>{skills.skillName}</p>
							</li>
						);
					})
				}
			</ul>
		</div>
	);
}
