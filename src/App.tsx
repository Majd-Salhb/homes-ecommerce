import "./App.css";
import Home from "./component/Home";
import Reviews from "./component/Reviews";

import AboutUs from "./component/AboutUs";
import Services from "./component/Services";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Skills from "./component/Skills";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <Skills />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
