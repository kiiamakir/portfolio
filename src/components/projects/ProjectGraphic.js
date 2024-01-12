import browserButtons from '../../graphics/browser-buttons.svg'

const ProjectGraphic = ({ graphic, altText }) => {
    return (
        <div className='graphic-container'>
          <div className='browser-button-container'>
            <img className='browser-buttons' src={browserButtons} alt="browser buttons for graphic" />
          </div>
          <img className='project-graphic' src={graphic} alt={altText} />
        </div>
    );
};

export default ProjectGraphic