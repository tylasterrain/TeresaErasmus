import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Features } from "./components/features";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { ContactInfo } from "./components/contactInfo";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});



const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

 

  return (
    <div className="page">
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <Services data={landingPageData.Services} />
      <Features data={landingPageData.Features} />
      <Contact data={landingPageData.Contact} />
      <ContactInfo data={landingPageData.Contact} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

export default App;
