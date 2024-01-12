import '../../styles/projects.css'
import mainGraphic from '../../graphics/aalto-grades/main-image.png'
import courseOverview from '../../graphics/aalto-grades/course-overview.png'
import courseInstance from '../../graphics/aalto-grades/course-instance.png'
import createAttainment from '../../graphics/aalto-grades/create-attainment.png'
import gradingFormula from '../../graphics/aalto-grades/grading-formula.png'
import courseResults from '../../graphics/aalto-grades/course-results.png'
import addCourseResults from '../../graphics/aalto-grades/add-course-results.png'
import ProjectGraphic from './ProjectGraphic'

const AaltoGrades = () => {
    return (
      <div className='project-page'>
      <div className='project-container'>
        <h1 className='project-h'>Aalto Grades</h1>
        <ProjectGraphic graphic={mainGraphic} altText={'Aalto Grades UI'} />
        <div className='info-container main'>
          <div>
            <h2>My role</h2>
            <p>Designer and frontend developer</p>
          </div>
          <div>
            <h2>Team size</h2>
            <p>8 developers + scrum master</p>
         </div>
         <div>
            <h2>Created for</h2>
            <p>Aalto University, 2022-2023</p>
         </div>
        </div>
        <div className='info-container'>
          <h2>Tools and Technologies</h2>
          <div className='tools-container'>
            <div className="label-container"><p className="label-text">Figma</p></div>
            <div className="label-container"><p className="label-text">GitHub</p></div>
            <div className="label-container"><p className="label-text">React</p></div>
            <div className="label-container"><p className="label-text">Styled components</p></div>
          </div>
        </div>
        <div className='info-container'>
          <h2>Problem</h2>
          <p>University students complete assignments and exams in multiple different platforms. Teachers find it difficult and time consuming to go through the various platforms, collecting and saving the students grades. No tools exist for combining students assignments, calculating grades based on them and saving the results for future course implementations.</p>
        </div>
        <div className='info-container'>
          <h2>Solution</h2>
          <div className='solution-container'>
            <p>Our aim was to create a minimum viable product of the software. The development process began with choosing our tech stack, conducting user interviews and creating the initial designs in Figma. The biggest challenge was taking account the varying user requirements, since our interviews revealed that there was significant variance in ways that teachers graded their courses.</p>
            <p>Below are Figma designs for the course view, which is displayed once a teacher logs in and a view of a specific course instance.</p>
            <ProjectGraphic graphic={courseOverview} altText={'Course overview UI'} />
            <ProjectGraphic graphic={courseInstance} altText={'Course instance UI'} />
            <p>In addition to login, signup and the above views, the MVP included the functionality to add new courses, course intances and study attainments. The study attainments are stored and displayed in a tree structure, which offers the teachers the flexibility to add sub-attainments.</p>
            <ProjectGraphic graphic={createAttainment} altText={'Create study attainments UI'} />
            <p>One of the most important features for the software was the ability to specify a grading formula for calculating a students total grade for the course or the grade for a set of sub-attainments. The grading formulas calculated the grade based on specific attribute values. For example, after selecting the weighted average grading formula, the teacher needs to define the attribute value 'weight' for all of the selected study attainments. The initial selection of formulas was chosen based on the continuous user research we conducted during the project.</p>
            <ProjectGraphic graphic={gradingFormula} altText={'Select grading formula UI'} />
            <p>After all of the study attainments and grading formulas have been specified, the teacher can import the students results to the system. The MVP wasn't integrated with the various platforms in use at Aalto, but importing grades from a CSV file was made possible. After importing the results, the final grades for the students can be calculated.</p>
            <ProjectGraphic graphic={courseResults} altText={'Course results UI'} />
            <ProjectGraphic graphic={addCourseResults} altText={'Add course results UI'} />
            <p>This solution presents the main features of the system that I worked on during the development of the project. Overall, the project was more complicated than initially anticipated but we managed to create a working MVP. Our team worked on this project as part of a university course. However, the development has continued after the course with another team.</p>
          </div>
        </div>
        <button role="link" onClick={() => window.open('https://github.com/aalto-grades/base-repository', "_blank", "noreferrer")} >CODE</button>
      </div>
      </div>
    );
  }
  
  export default AaltoGrades;