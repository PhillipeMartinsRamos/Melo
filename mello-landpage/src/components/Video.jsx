import "./Video.css";
import video from "../assets/video.mp4";
import frame from "../assets/frame.jpg";
import { useEffect, useRef } from "react";

const Video = ({ bannerTextElement }) => {
  const videoFrameElement = useRef();
  const videoElement = useRef();
  const btnContato = useRef();

  function handleVideoEnded() {
    if (videoElement.current.muted == false) {
      btnContato.current.classList.add("visivel");
    }
  }

  useEffect(() => {
    videoElement.current.addEventListener("ended", handleVideoEnded);
  }, []);

  return (
    <div className="video-container">
      {/* <div className="video-frame"></div> */}
      <video
        src={video}
        controlsList="nodownload nofullscreen"
        ref={videoElement}
        autoPlay
        muted={true}
        poster={frame}
        onClick={() =>
          bannerTextElement.current.classList.add("banner-text-invisible")
        }
        loop
      ></video>

      <div className="btn-contato" ref={btnContato}>
        Clique aqui para entrar em contato
      </div>

      <button
        onClick={() => {
          videoElement.current.load();

          videoElement.current.loop = false;
          videoElement.current.muted = false;
          videoElement.current.play();
        }}
      >
        Play
      </button>
      <button onClick={() => videoElement.current.pause()}>Pause</button>
      <button></button>
    </div>
  );
};

export default Video;
