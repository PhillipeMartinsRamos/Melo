import "./Solucoes.css"
import solucoes from "../assets/solucoes.png"

const Solucoes = ()=> {
  return (
    <section className="solucoes" id="solucoes">
        <img src={solucoes} alt="" />
        <div>
            <h2>Nossas soluções:</h2>
            <p>O nosso serviço é ajudar a 
aumentar sua visibilidade online, direcionar clientes potenciais para a sua loja e otimizar estratégias de marketing para impulsionar as vendas.</p>
        </div>
    </section>
  )
}

export default Solucoes