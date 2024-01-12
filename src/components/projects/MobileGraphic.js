const MobileGraphic = ({ graphic, altText, hide }) => {
    return (
        <div className={hide ? 'graphic-container mobile hide ' : 'graphic-container mobile'}>
          <img className='project-graphic' src={graphic} alt={altText} />
        </div>
    );
};

export default MobileGraphic;