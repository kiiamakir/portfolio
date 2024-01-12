import '../../styles/projects.css'
import MobileGraphic from './MobileGraphic'
import ProjectGraphic from './ProjectGraphic'
import mainGraphic from '../../graphics/recipe-stash/mainImage.png'
import colors from '../../graphics/recipe-stash/colors.png'
import graphics from '../../graphics/recipe-stash/graphics.png'
import sketches from '../../graphics/recipe-stash/sketches.JPG'
import designs from '../../graphics/recipe-stash/designs.png'
import ranking from '../../graphics/recipe-stash/ranking.png'
import frontPage from '../../graphics/recipe-stash/front-page.png'
import addRecipe from '../../graphics/recipe-stash/add-recipe.png'
import profile from '../../graphics/recipe-stash/profile.png'
import personas from '../../graphics/recipe-stash/personas.png'
import scenario from '../../graphics/recipe-stash/scenario.png'

const RecipeStash = () => {
    return (
      <div className='project-page'>
      <div className='project-container'>
        <h1 className='project-h'>Recipe Stash</h1>
        <ProjectGraphic graphic={mainGraphic} altText={'Recipe Stash home page UI'} />
        <div className='info-container main'>
          <div>
            <h2>My role</h2>
            <p>Designer and frontend developer</p>
          </div>
          <div>
            <h2>Team size</h2>
            <p>3 developers</p>
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
            <div className="label-container"><p className="label-text">Adobe Illustrator</p></div>
            <div className="label-container"><p className="label-text">React</p></div>
            <div className="label-container"><p className="label-text">CSS</p></div>
            <div className="label-container"><p className="label-text">GitHub</p></div>
          </div>
        </div>
        <div className='info-container'>
          <h2>Problem</h2>
          <p>The web is filled with recipes in different formats, such as videos, images and blog posts. Many existing recipe applications allow users to type out ingredients and instructions, but what if a user discovers a recipe when they are browsing the web and wants to save its link quickly and continue browsing. Of course the person could bookmark the website or save the recipe in the app where they found it. However, it can be hard to find the recipes later when they are saved in multiple locations without any organization.</p>
        </div>
        <div className='info-container'>
          <h2>Context-of-use</h2>
          <div className='solution-container'>
            <p>Recipe Stash is a website that allows users to save and browse recipes efficiently. We created three personas to represent the main user groups of our application.</p>
            <ProjectGraphic graphic={personas} altText={'Personas for Recipe Stash'} />
            <p>The personas were then used to create use cases and user stories. In total we had 4 scenarios to describe the main use cases for our application. Additionally, we wrote short user stories and linked them to use cases. The use cases illustrated the sequences our users have to complete in order to reach their goals. These served as the foundation for the views and features of our interface. Below is an example of one of our scenarios, use cases and user stories.</p>
            <ProjectGraphic graphic={scenario} altText={'Example scenario, user story and use case'} />
          </div>
        </div>
        <div className='info-container'>
          <h2>Solution</h2>
          <div className='solution-container'>
            <p>I began the design process by creating rough sketches with a pencil on paper. The sketches were discussed with the team and modified based on their input.</p>
            <ProjectGraphic graphic={sketches} altText={'Pencil sketches of the UI'} />
            <p>The next iterations of the wireframes were created in Figma. At this stage, we also decided on the color scheme for the site. The team had varying color preferences and thus, we created multiple versions of our front page and recipe page with different color schemes. These versions were narrowed down until we landed on the final selection of colors.</p>
            <ProjectGraphic graphic={colors} altText={'Color selection in Figma'} />
            <p>During the design process, I created all of the graphics and icons for the interface using Adobe Illustrator. The graphics and some of the icons can be seen in the image below.</p>
            <ProjectGraphic graphic={graphics} altText={'Graphics for the UI'} />
            <p>The final Figma designs for mobile are featured below. However, some of the designs were modified during the development process.</p>
            <ProjectGraphic graphic={designs} altText={'Final Figma designs'} />
            <p>After the desings for the pages were complete, we began the development process. The website was designed with a mobile-first approach, but all of the views were made responsive to all screen sizes.</p>
            <div className='mobile-graphic-container'>
            <MobileGraphic graphic={frontPage} altText={'Front page UI'} />
            <MobileGraphic graphic={addRecipe} altText={'Add recipe page UI'} />
            <MobileGraphic graphic={profile} altText={'Profile page UI'} />
          </div>
          <ProjectGraphic graphic={ranking} altText={'Ranking page UI'} />
          </div>
        </div>
        <div className='button-container'>
          <button role="link" onClick={() => window.open('https://github.com/portmil/recipe-stash', "_blank", "noreferrer")} >CODE</button>
          <button role="link" onClick={() => window.open('https://recipe-stash.onrender.com/home', "_blank", "noreferrer")} >LIVE</button>
        </div>
      </div>
      </div>
    );
  }
  
  export default RecipeStash;