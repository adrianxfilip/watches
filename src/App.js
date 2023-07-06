import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollTop";
import AnimatedRoutes from "./AnimatedRoutes";
import Layout from "./Components/Layout/Layout";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
