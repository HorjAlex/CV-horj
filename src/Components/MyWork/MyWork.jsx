import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon  from '../../assets/arrow_icon.svg'

const MyWork = () => {

  const workExperience = [
    {
      companyName: "North Highland",
      jobTitle: "Software QA Engineer",
      period: "Sep 2023 - Present",
      project: "Projects: Enterprise financial platform, Software as a Service(SaaS)",
      responsibilities: [
        "Create and implement detailed test plans and scenarios to validate software application requirements and functionality.",
        "Performing manual tests to verify the correctness of the implementation of the functionalities and compliance with the technical requirements.",
        "Checking and validating application documentation to ensure accuracy and completeness of information so that tests are relevant and properly targeted.",
        "Conducting tests on multiple platforms and browsers to validate cross-platform compatibility of applications.",
        "Constant collaboration with development and management teams.",
        "Monitoring performance and ensuring applications are efficient, stable and compliant with security requirements.",
        "Testing APIs to ensure they work according to specifications, testing responses and validating correct integration with other services.",
        "Collaborated with design teams to enhance UX",
        "Trained and mentored new joiners",
        "Automated repetitive processes",
      ]
    },
    {
      companyName: "RebelDot",
      jobTitle: "QA Engineer",
      period: "Feb 2021 - Aug 2023", 
      project: "Projects: Big Data Compliance, ISO cetification platform, Cryptocurrency",
      responsibilities: [
        "Conducted comprehensive testing of complex software systems, ensuring high quality and reliability of deliverables",
        "Developed and executed test plans, test cases, and test scripts to ensure thorough coverage of system functionality and integration.",
        "Perform functional, regression, integration, and acceptance testing as appropriate.",
        "Collaborated closely with cross-functional teams, including development and product management, to drive defect resolution and enhance overall product quality.",
        "Implemented and maintained an automated testing framework, resulting in increased test efficiency and reduced time-to-market for critical software releases.",
        "Analyze test results and provide feedback to improve software quality.",
        "Developed and executed automated test suites using WebDriver IO, resulting in a 50% reduction in testing time and a 25% increase in test case coverage. ",
        "Trained and mentored a junior QA team member, providing guidance and support to ensure adherence to best practices and consistent testing methodologies.",
        "Maintain accurate and up-to-date test documentation, including test plans, test cases, and test reports.",
      ]
    },
    {
      companyName: "Accesa",
      jobTitle: "Software Engineer in Test",
      period: "Sep 2019 - Feb 2021",
      project: "Projects: Finance and Insurance, Ecommerce Website ", 
      responsibilities: [
        "Conducted thorough manual testing on software products, ensuring they met or exceeded quality standards and specifications.",
        "Developed and implemented comprehensive test plans and procedures, resulting in a significant reduction in software defects and improved overall product performance.",
        "Collaborated with teams, including developers, project managers, and stakeholders, to identify and resolve software issues in a timely and efficient manner.",
        "Collaborated with cross-functional teams to identify and resolve defects, reducing the number of customer-reported issues."
      ]
    }
  ];






  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      
      <div className="work-cards-container">
        {workExperience.map((job, index) => (
          <div key={index} className="work-card">
            <h2>{job.companyName}</h2>
            <h3>{job.jobTitle}</h3>
            <p>{job.period}</p>
            <p1>{job.project}</p1>
            <ul>
              {job.responsibilities.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  




      
    
  )
}

export default MyWork
