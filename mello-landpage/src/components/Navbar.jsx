import "./Navbar.css";
import logo from "../assets/LogoD.png";

const Navbar = () => {
  return (
    <header>
      <div className="first-group">
        <h1 className="logo">
          <img src={logo} alt="" />
        </h1>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="#banner">Soluções</a></li>
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
