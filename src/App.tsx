import "./App.css";
import Home from "./component/Home";
import Reviews from "./component/Reviews";
// import ContactUs from "./component/ContactUs";
import AboutUs from "./component/AboutUs";
import Services from "./component/Services";
import { SmoothScrollHero } from "./component/SmoothScrollHero";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import "tailwindcss";
import "./index.css";
import Skills from "./component/Skills";

function App() {
  return (
    <>
      {/* <SmoothScrollHero/> */}
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
