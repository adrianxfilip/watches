import { Outlet, Link, useLocation } from "react-router-dom";
import "../../Styles/Layout.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../../Assets/logo.png";
import MobileMenu from "./MobileMenu";

function Navbar(props) {
  return (
    <ul>
      <li>
        <Link to="/" className={props.activePage == "/" ? "active" : ""}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/colectie" className={props.activePage == "/colectie" ? "active" : ""}>
          Colectie
        </Link>
      </li>
      <li>
        <Link to="/contact" className={props.activePage == "/contact" ? "active" : ""}>
          Contact
        </Link>
      </li>
    </ul>
  );
}

function CartIcon(props) {
  return (
    <Link to="/cos" className="cart-icon">
      <i className={props.activePage == "/cos" || props.activePage == "/checkout" ? "fi fi-rs-shopping-bag active" : "fi fi-rs-shopping-bag"}></i>
    </Link>
  );
}

function Menu(props) {
  const [activePage, setPage] = useState(window.location.pathname);

  const location = useLocation();

  useEffect(() => {
    setPage(location.pathname);
  }, [location]);

  return (
    <>
      <MobileMenu menu={<Navbar activePage = {activePage}/>}></MobileMenu>
      <img src={logo} style={{margin : props.isSmall ? ".5em": "1em",width : props.isSmall ? "3em" : "4em", transitionDuration : ".1s"}} />
      <Navbar activePage = {activePage}/>
      <CartIcon activePage = {activePage}/>
    </>
  );
}

const Layout = () => {
  const[isSmall, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 75)
      );
    }
  }, []);

  return (
    <header className={isSmall ? "small-header" : ""}>
      <Menu isSmall={isSmall} />
      <Outlet />
    </header>
  );
};

export default Layout;
