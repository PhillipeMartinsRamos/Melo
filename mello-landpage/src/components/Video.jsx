import "./Video.css"
import video  from "../assets/video.mp4"

const Video = () => {
  return (
    <div className="video-container">
        <div className="video-frame"></div>
        <video src={video} onClick={(e) => e.target.play()} controlsList="nodownload " autoPlay="true"></video>
    </div>
  )
}

export default Video