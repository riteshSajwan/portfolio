import React from "react"
import './ProjectCard.css'
import { Fade } from 'react-awesome-reveal'
import { BrowserView, MobileView } from 'react-device-detect';

export default function ProjectCard({ cardInfo }) {
	console.log(cardInfo)
	function openUrlInNewTab(url) {
		var win = window.open(url, "_blank");
		win.focus();
	}

	return (
		<>
			<BrowserView>
				<Fade direction={cardInfo.direction} duration={1000} distance="20px">
					<div className="project-card">
						<div className="productinfo">
							<div className="projectImage">
								<img src={cardInfo.image} alt="PWA" />
								{/* <video src={cardInfo.video}  alt="vid"/> */}
								<div className="projectFooter">
							{
								cardInfo.footer && cardInfo.footer.map((v, i) => {
									return (
										<span key={i} className="certificate-tag" onClick={() => openUrlInNewTab(v.url)} >{v.name}</span>
									);
								})
							}
						</div>
							</div>
							<div className="projectDetails">
								<h5 className="projectTitle">{cardInfo.title}</h5>
								<p className="projectSubtitle">{cardInfo.description}</p>
							</div>
						</div>
						
					</div>
				</Fade>
			</BrowserView>
			<MobileView>
				<Fade direction="bottom" duration={1000} distance="20px">
					<div className="project-card">
						<div className="projectImage">
							<img src={cardInfo.image} alt="PWA" />
						</div>
						<div className="projectDetails">
							<h5 className="projectTitle">{cardInfo.title}</h5>
							<p className="projectSubtitle">{cardInfo.description}</p>
						</div>
						<div className="projectFooter">
							{
								cardInfo.footer && cardInfo.footer.map((v, i) => {
									return (
										<span key={i} className="certificate-tag" onClick={() => openUrlInNewTab(v.url)} >{v.name}</span>
									);
								})
							}
						</div>
					</div>
				</Fade>
			</MobileView>
		</>
	);
}