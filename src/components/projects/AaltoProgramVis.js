import '../../styles/projects.css'
import ProjectGraphic from './ProjectGraphic'
import mainGraphic from '../../graphics/program-vis/program-vis-main.png'
import circleBack from '../../graphics/program-vis/circle-pack.png'
import circleBackDetail from '../../graphics/program-vis/circle-pack-detail.png'
import addData from '../../graphics/program-vis/add-data.png'
import suggestChangesBtn from '../../graphics/program-vis/suggest-changes-btn.png'
import suggestChanges from '../../graphics/program-vis/suggest-changes.png'
import courseView from '../../graphics/program-vis/course-view.png'
import courseViewCourses from '../../graphics/program-vis/course-view-courses.png'
import incompleteCourse from '../../graphics/program-vis/incomplete-course.png'

const AaltoProgramVis = () => {
    return (
      <div className='project-page'>
      <div className='project-container'>
        <h1 className='project-h'>Aalto Program Visualisation</h1>
        <ProjectGraphic graphic={mainGraphic} altText={'Aalto Program Visualization UI'} />
        <div className='info-container main'>
          <div>
            <h2>My role</h2>
            <p>Designer and full-stack developer</p>
          </div>
          <div>
            <h2>Team size</h2>
            <p>Solo project</p>
         </div>
         <div>
            <h2>Created for</h2>
            <p>Online Hybrid Lab, 2023</p>
         </div>
        </div>
        <div className='info-container'>
          <h2>Tools and Technologies</h2>
          <div className='tools-container'>
            <div className="label-container"><p className="label-text">Figma</p></div>
            <div className="label-container"><p className="label-text">React</p></div>
            <div className="label-container"><p className="label-text">D3.js</p></div>
            <div className="label-container"><p className="label-text">CSS</p></div>
            <div className="label-container"><p className="label-text">Node.js</p></div>
            <div className="label-container"><p className="label-text">MongoDB</p></div>
          </div>
        </div>
        <div className='info-container'>
          <h2>Background</h2>
          <p>Online Hybrid Lab designs models and products to improve online learning at Aalto. However, it is very difficult to find out which online learning methods are currently at use in the university. A visualisation of all programs is required to grasp the current state of online learning at Aalto.</p>
        </div>
        <div className='info-container'>
          <h2>Solution</h2>
          <div className='solution-container'>
            <p>I designed, developed and gathered the data for this project myself. I enjoyed the challenge of creating a full-stack project even though I am most comfortable with frontend development. In the current implementation, every user is able to view the visualisation and fill out a form suggesting changes to course data. Furthermore, an administrators are able to login with an admin account, which gives them the ability to add and modify data.</p>
            <p>The below circle packing visualisation of the scools at Aalto was created with D3.js. Clicking on the circles zooms in the visualisation and allows the users to see the individual programs. The size of each program circle represents the amount of online elements used in that program.</p>
            <ProjectGraphic graphic={circleBack} altText={'Circle back visualisation of university programs'} />
            <ProjectGraphic graphic={circleBackDetail} altText={'Zoomed in view of the circle back visualisation'} />
            <p>Clicking on the name of a program opens a modal containing information about the program. First, a horizontally scrollable container features statistics about the amount of online learning methods used in the program. Every online element has their own color. Below is a list of all of the courses in the program. Each program is tagged with the online elements that are used in the course.</p>
            <ProjectGraphic graphic={courseView} altText={'Course view UI'} />
            <ProjectGraphic graphic={courseViewCourses} altText={'Course list UI'} />
            <p>The interface is meant to be viewed by teachers, program directors and the developers of online learning. If a teacher viewing the UI finds an error with the online elements linked to a course, they can fill out a short form suggesting changes to it. The contents of the from is sent to an email address that I created during the project.</p>
            <ProjectGraphic graphic={suggestChangesBtn} altText={'Suggest changes button UI'} />
            <ProjectGraphic graphic={suggestChanges} altText={'Suggest changes UI'} />
            <p>The process of collecting data was very time consuming. Thus, I wasn't able to gather data about every course during the project. Programs with missing courses are indicated with an alert. For adim users, the alert contains a button that opens a form for adding the missing course data.</p>
            <ProjectGraphic graphic={incompleteCourse} altText={'Incomplete course view UI'} />
            <ProjectGraphic graphic={addData} altText={'Add data form'} />
          </div>
        </div>
        <button role="link" onClick={() => window.open('https://github.com/kiiamakir/program-visualisation', "_blank", "noreferrer")} >CODE</button>
      </div>
      </div>
    );
  }
  
  export default AaltoProgramVis;