import '../../styles/projects.css'
import MobileGraphic from './MobileGraphic'
import login from '../../graphics/tree-planter/login.png'
import introOne from '../../graphics/tree-planter/intro-1.png'
import user from '../../graphics/tree-planter/user.png'
import Video from './Video'
import ProjectGraphic from './ProjectGraphic'
import figmaComponents from '../../graphics/tree-planter/figma-components.png'
import myDesigns from '../../graphics/tree-planter/my-designs.png'
import personas from '../../graphics/tree-planter/personas.png'

const TreePlanter = () => {
  return (
    <div className='project-page'>
      <div className='project-container'>
        <h1 className='project-h'>Tree Planter</h1>
        <div className='mobile-graphic-container'>
          <MobileGraphic graphic={login} altText={'Login page for Tree Planter'} hide={true} />
          <MobileGraphic graphic={introOne} altText={'NGO selection page for Tree Planter'} hide={true} />
          <MobileGraphic graphic={user} altText={'User page for Tree Planter'} />
        </div>
        <div className='info-container main'>
          <div>
            <h2>My role</h2>
            <p>Designer</p>
          </div>
          <div>
            <h2>Team size</h2>
            <p>4 designers</p>
         </div>
         <div>
            <h2>Created for</h2>
            <p>University course, 2023</p>
         </div>
        </div>
        <div className='info-container'>
          <h2>Tools and Technologies</h2>
          <div className='tools-container'>
            <div className="label-container"><p className="label-text">Figma</p></div>
          </div>
        </div>
        <div className='info-container'>
          <h2>Background</h2>
          <p>The aim of the project was to create a graphical user interface for an application that records the number of planted trees. In our chosen approach, the application is targeted to different non-governmental organizations (NGOs) and their tree planting projects. This application domain was further narrowed down to NGOs with smaller-scale local projects. The software aims to encourage users to plant trees in their free time and follow how other community members in the same project are doing.</p>
        </div>
        <div className='info-container'>
          <h2>Context-of-use</h2>
          <div className='solution-container'>
            <p>We began by researching NGOs tree planting initiatives as well as excisting products that fit our application domain. Our research uncovered meaningful information about the users, tasks and the environment. We presented this information in the form of personas. The personas illustrate the charasteristics of the two main user groups.</p>
            <ProjectGraphic graphic={personas} altText={'Personas created for Tree Planter'} />
            <p>We utilized the personas for identifying the users' most important goals and tasks. Based on these, we were able to create a list of required features for the interface and begin designing the UI.</p>
          </div>
        </div>
        <div className='info-container'>
          <h2>Solution</h2>
          <div className='solution-container'>
            <p>This project required every member of our group to first design a part of the UI individually and then combine the designs to create a cohesive product. Taking inspiration from our individual designs, we created a color palette, icons and Figma components for common UI elements. The final designs were supported by a document that featured our research and the justifications for our design decisions.</p>
            <ProjectGraphic graphic={figmaComponents} altText={'Figma components for final designs'} />
            <p>I was responsible for creating the views for login, signup, onboarding tutorial and user profile. Moreover, these views needed to include the functionality for logging out as well as for changing the users community or NGO. My final designs can be seen in the image below.</p>
            <ProjectGraphic graphic={myDesigns} altText={'My final designs for Tree Planter'} />
            <p>The final Figma prototype featuring designs from every group member is presented in the video.</p>
            <Video/>
          </div>
        </div>
      </div>
      </div>
  );
}

export default TreePlanter;