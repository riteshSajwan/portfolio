import React from 'react';
import './Education.css';
import EducationCard from '../../components/EducationCard/EducationCard';
import { educationInfo } from './../../Portfolio';

const Education = () => {

	if (educationInfo.display !== true) {
		return null
	}

	return (
		<div className="education" id="education">
			<div className="max-width">
				<div className="education-section">
					<h1 className="education-heading">Education</h1>
					<div className="education-card-container">
					{
						educationInfo.schools && educationInfo.schools.map((school, i) => (
							<EducationCard school={school} key={i} />
						))
					}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Education;