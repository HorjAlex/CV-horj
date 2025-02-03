import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/A2.jpeg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Manual QA with over 5 years of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p>My passion for IT area is not only reflected in my experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
               <div className="about-skill"><p>Jira & Confluence</p><hr style={{width:"100%"}} /></div>
               <div className="about-skill"><p>Xray & TestRail</p><hr style={{width:"90%"}} /></div>
               <div className="about-skill"><p>Test planning</p><hr style={{width:"100%"}} /></div>
               <div className="about-skill"><p>Defect management</p><hr style={{width:"100%"}} /></div>
               <div className="about-skill"><p>Funtional Testing</p><hr style={{width:"100%"}} /></div>
               <div className="about-skill"><p>Non-Funtional Testing</p><hr style={{width:"100%"}} /></div>
               <div className="about-skill"><p>Postman</p><hr style={{width:"70%"}} /></div>
               <div className="about-skill"><p>DBeaver</p><hr style={{width:"65%"}} /></div>
               <div className="about-skill"><p>MySQL</p><hr style={{width:"50%"}} /></div>
               <div className="about-skill"><p>Git commands</p><hr style={{width:"50%"}} /></div>
               <div className="about-skill"><p>Automation</p><hr style={{width:"40%"}} /></div>
               <div className="about-skill"><p>WebDriver IO</p><hr style={{width:"65%"}} /></div>
               <div className="about-skill"><p>Selenium</p><hr style={{width:"40%"}} /></div>
               <div className="about-skill"><p>VS Code</p><hr style={{width:"60%"}} /></div>
               <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
               <div className="about-skill"><p>React JS</p><hr style={{width:"40%"}} /></div>
               <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>5+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3+</h1>
            <p>Companies</p>
        </div>
      </div>
    </div>
  )
}

export default About
