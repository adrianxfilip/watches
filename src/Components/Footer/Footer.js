import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import "../../Styles/Footer.scss"

export default function Footer() {
  return (
    <footer>
      <img src={logo} />
      <hr />
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae;
        <br />
        Nullam lacus ante, dignissim ut risus ut, dapibus accumsan nisl
      </p>
      <ul>
        <li><Link to="/privacy-policy">Politica de confidentialitate</Link></li>
        <li><Link to="/terms-and-conditions">Termeni si conditii</Link></li>
        <li><Link to="/colectie">Colectie</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <ul>
        <li><Link to="https://www.instagram.com/" target="_blank"><i className="fi fi-brands-instagram"></i></Link></li>
        <li><Link to="https://www.tiktok.com/en/" target="_blank"><i className="fi fi-brands-tik-tok"></i></Link></li>
      </ul>
      <p className="copyright">Copyright © COMPANY NAME {new Date().getFullYear()}</p>
    </footer>
  );
}
