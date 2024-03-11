import "./Video.css";
import video from "../assets/video.mp4";
import frame from "../assets/frame.jpg";
import { useEffect, useRef } from "react";

const Video = ({ bannerTextElement }) => {
  const videoFrameElement = useRef();
  const videoElement = useRef();
  const videoContainerElement = useRef();
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
    <div className="video-container" ref={videoContainerElement}>
      {/* <div className="video-frame"></div> */}
      <video
        src={video}
        controlsList="nodownload nofullscreen"
        ref={videoElement}
        autoPlay
        muted={true}
        poster={frame}
        onClick={() => {
          //Adiciona as classes que modificam tamanhos de posicoes do elementos
          bannerTextElement.current.classList.add("banner-text-hide")
          videoContainerElement.current.classList.add("video-container-grow")

          //executa comandos no video
          videoElement.current.load();
          videoElement.current.loop = false;
          videoElement.current.muted = false;
          videoElement.current.play();
          videoElement.current.controls = "controls"
        }}
        loop
      ></video>

      <div className="btn-contato" ref={btnContato}>
        Clique aqui para entrar em contato
      </div>

      {/* <button onClick={() => videoElement.current.pause()}>Pause</button> */}
    </div>
  );
};

export default Video;
