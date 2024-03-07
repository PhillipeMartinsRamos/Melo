import { useRef } from "react";
import "./Banner.css";
import Video from "./Video";

const Banner = () => {

  const bannerTextElement = useRef()
  
  return (
    <section className="banner">
      <div className="banner-text" ref={bannerTextElement}>
        <h2>DOMINE O FLUXO</h2>
        <p>Soluções de Gestao de Tráfego para alavancar seu sucesso online</p>
      </div>
      <Vi deo bannerTextElement={bannerTextElement} />
    </section>
  );
};

export default Banner;
