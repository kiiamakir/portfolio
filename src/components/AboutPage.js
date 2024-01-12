import '../styles/AboutPage.css'
import AboutGraphic from '../graphics/portfolio-aboutme.svg'
import DesignIcon from '../graphics/desgin-icon.svg'
import DevelopmentIcon from '../graphics/development-icon.svg'

const AboutPage = () => {
    return (
      <div className="about-page-container">
          <div className='about-flex-container'>
            <div className='text-container'>
              <h1>About Me</h1>
              <p className='primary-p'>Hello there! I'm Kiia, a designer and developer based in Finland, currently immersed in the exciting study of Human-Computer Interaction.</p>
              <p className='primary-p'>From concept to execution, I enjoy the challenge of bringing ideas to life in the digital world. Join me as I embark on this exciting journey of creativity and coding, always seeking for new opportunities to learn and grow.</p>
            </div>
            <img className='about-graphic' src={AboutGraphic} alt="About page graphic" />
          </div>
          <div className='design-dev-bg'>
            <div className='design-dev-container'>
              <div className='aspect-container'>
              <img className='about-icon' src={DesignIcon} alt="Desgin icon" />
                <div>
                  <h2 className='about-subh'>Design</h2>
                  <p className='primary-p'>Balancing aesthetics with functionality, I strive to create interfaces that look great and offer a seamless and an intuitive user experience. Moreover, I enjoy the process of creating graphics and icons to support my designs.</p>
                </div>
              </div>
              <div className='aspect-container'>
              <img className='about-icon' src={DevelopmentIcon} alt="Development icon" />
                <div>
                  <h2 className='about-subh'>Development</h2>
                  <p className='primary-p'>As a frontend developer, I have a passion for turning designs into functional, responsive, and dynamic websites. At the core of my development process lies a proficiency with React, JavaScript, HTML, and CSS.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  };
  
  export default AboutPage;