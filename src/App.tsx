import "./App.css";
import Home from "./component/Home";
import Reviews from "./component/Reviews";

import AboutUs from "./component/AboutUs";
import Services from "./component/Services";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Skills from "./component/Skills";

function App() {
  return (
    <>
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
