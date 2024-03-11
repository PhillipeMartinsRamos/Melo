import "./Video.css";
import video from "../assets/video.mp4";
import frame from "../assets/frame.jpg";
import { useEffect, useRef, useState } from "react";

const Video = ({ bannerTextElement }) => {

const[videoExpanded, setVideoExpanded] = useState(false)

  const videoFrameElement = useRef();
  const videoElement = useRef();
  const videoContainerElement = useRef();
  const btnContato = useRef();

  function handleVideoEnded() {
    if (videoElement.current.muted == false) {
      btnContato.current.classList.add("visivel");
    }
  }

  function handleExpandVideo() {
    //Adiciona as classes que modificam tamanhos de posicoes do elementos
    bannerTextElement.current.classList.add("banner-text-hide");
    videoContainerElement.current.classList.add("video-container-grow");

    //Habilita botao de fechar video
    setVideoExpanded(true)

    //executa comandos no video
    videoElement.current.load();
    videoElement.current.loop = false;
    videoElement.current.muted = false;
    videoElement.current.play();
    videoElement.current.controls = "controls";
  }

  function handleCloseVideo() {
    //Adiciona as classes que modificam tamanhos de posicoes do elementos
    bannerTextElement.current.classList.remove("banner-text-hide");
    videoContainerElement.current.classList.remove("video-container-grow");

    //Habilita botao de fechar video
    setVideoExpanded(false)

    //executa comandos no video
    videoElement.current.loop = true;
    videoElement.current.muted = true;
    videoElement.current.controls = false;
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
        onClick={handleExpandVideo}
        loop
      ></video>
      {videoExpanded && <button className="fechar-video" onClick={handleCloseVideo}>X</button>}
      <div className="btn-contato" ref={btnContato}>
        Clique aqui para entrar em contato
      </div>

      {/* <button onClick={() => videoElement.current.pause()}>Pause</button> */}
    </div>
  );
};

export default Video;
