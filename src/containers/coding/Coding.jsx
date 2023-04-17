import React from 'react'
import {CodingSection} from "../../Portfolio"
import "./Coding.css"

const coding = () => {
    
    if (CodingSection.display !== true) {
        return null
    }
  return (
    <>
    <div className="codingContainer">
            <div className="codingContent">
            <h1 className='codingHeading'>{CodingSection.heading}</h1>
            {CodingSection.codingPlatform.map((platform,index)=>{
                return (
                    
                    <>
                    
                    <div key={index}  className="codingbox">
                        <h2  className='codinPlatform'>{index+1}.  {platform.name}</h2>
                        <div className="desc"><p >{platform.desc}</p></div>
                        {/* <Link to="https://leetcode.com/ritesh9211/">Visit Profile</Link> */}
                        <a className='link' href={platform.link} target="_blank">Visit {platform.name} Profile</a>
                        {/* <iframe src="https://leetcode.com/ritesh9211/"></iframe> */}
                    </div>
                    </>
                   
                )
                
            })}
         </div>
        </div>
        

    </>
  )
}

export default coding