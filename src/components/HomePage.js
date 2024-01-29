import '../styles/HomePage.css'
import HomeGraphic from '../graphics/portfolio-illustration.svg'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div className="home-page-container">
      <img className='home-graphic' src={HomeGraphic} alt="Home page graphic" />
      <div className="h-container">
        <h1>Hi, I'm <span className="bold-h1">KIIA</span>. A designer & developer</h1>
      </div>
      <div className="content-container">
        <div className='work-container'>
        <h1>My work</h1>
          <div className='browser-container'>
            <div className='browser-outline mobile' onClick={() => navigate('/work/recipe-stash')}>
              <div>
                <h2>Recipe Stash</h2>
                <p>UI Design</p>
                <p>Web Development</p>
              </div>
              <div className='browser-graphic-mobile recipe-stash'></div>
            </div>
            <div className='browser-outline mobile' onClick={() => navigate('/work/tree-planter')}>
              <div>
                <h2>Tree Planter</h2>
                <p>UI Design</p>
              </div>
              <div className='browser-graphic-mobile tree-planter'></div>
            </div>
            <div className='browser-outline' onClick={() => navigate('/work/aalto-program-vis')}>
              <h2>Aalto Program Visualisation</h2>
              <p>Web Development</p>
              <div className='browser-graphic-computer aalto-program-vis'></div>
            </div>
            <div className='browser-outline' onClick={() => navigate('/work/aalto-grades')}>
              <h2>Aalto Grades</h2>
              <p>Web Development</p>
              <div className='browser-graphic-computer aalto-grades'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomePage;