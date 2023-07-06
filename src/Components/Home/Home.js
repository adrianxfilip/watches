import { motion } from "framer-motion";
import "../../Styles/Home.scss";
import { Link } from "react-router-dom";
import { watches } from "../../Assets/Watches/watchesData";
import logo from "../../Assets/logo.png"
import tag from "../../Assets/tag-heuer.png"
import rolex from "../../Assets/rolex.png"
import cartier from "../../Assets/cartier.png"
import breitling from "../../Assets/breitling.png"

function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="landing"
    >
      <div className="container">
        <div className="wrapper">
          <h1>
            Ceasuri de firma <br />
            la preturi accesibile
          </h1>
          <hr />
          <h2>
            Lorem ipsum dolor sit amet, per id errem sententiae scriptorem. Vero
            blandit referrentur vix no, at luptatu.
          </h2>
          <button>Descopera colectia</button>
        </div>
      </div>
    </motion.div>
  );
}

function Featured() {
  return (
    <motion.div className="featured-watches">
      <h1 className="section-title">BESTSELLERS</h1>
      <hr />
      <div className="container">
        {watches
          .filter((watch) => watch.featured === true)
          .map((watch, index) => (
            <Link to={"/watch/"+watch.id} className="wrapper" key={"fw" + index}>
              <div className="image-wrapper">
                <img src={watch.images[0]} />{" "}
                <button className="view-watch">VEZI CEASUL</button>
              </div>
              <p className="name">{watch.name}</p>
              <p className="price">{watch.price}</p>
            </Link>
          ))}
      </div>
    </motion.div>
  );
}

function AboutUs() {
  return (
    <div className="about-us">
      <img src={logo}/>
      <h1 className="section-title">DESPRE NOI</h1>
      <hr />
      <p>Welcome to the Breitlingreplica.to-Breitling replica watches online watch store. How to spot the best breitling replica watches on the official website? Here you can find any fake Breitling replica watches that suit you. Super Breitling navitimer replica watches combine years of experience in the aviation industry to make them have the advantages of practicality, functionality, and diversity. We all the copy diamond best replica Breitling watches sold in the store have excellent quality. If you miss it, we will regret it for a lifetime, please take a look!</p>
    </div>
  );
}

function Banner() {
  return (
    <div className="all-watches-banner">
      <p>Vezi toate ceasurile</p>
      <button className="all-watches">DESCOPERA COLECTIA</button>
    </div>
  );
}

function BrandsBanner(){
  return (
    <div className="brands-banner">
      <img src={tag} />
      <img src={cartier} />
      <img src={rolex} />
      <img src={breitling} />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Landing />
      <Featured />
      <AboutUs />
      <Banner />
      <BrandsBanner />
    </>
  );
}
