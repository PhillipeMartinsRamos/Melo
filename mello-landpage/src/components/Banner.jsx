import "./Banner.css"
import Video from "./Video"

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
      <h2><span>DOMINE O FLUXO</span></h2>
      <p>Soluções de Gestao de Tráfego para alavancar seu sucesso online</p>
      </div>
      <Video />
    </section>
  )
}

export default Banner