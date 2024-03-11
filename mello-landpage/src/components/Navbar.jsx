import "./Navbar.css";
import logo from "../assets/LogoMeloWOName.png";

const Navbar = () => {
  return (
    <header>
      <div className="first-group">
        <h1 className="logo">
          <img src={logo} alt="" />
          <div>
          <p>Dgran Melo</p>
          </div>
        </h1>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="#solucoes">Soluções</a></li>
            <li><a href="">Sobre</a></li>
          </ul>
        </nav>
      </div>
      <div className="second-group">
        <button>Contato</button>
      </div>
    </header>
  );
};

export default Navbar;
