import video from '../../graphics/tree-planter/demo-video.mp4';

const Video = () => {
  return (
    <video width='100%' src={video} controls>
      <source type='video/mp4'/>
        Your browser does not support the video tag.
    </video>
  );
}

export default Video;