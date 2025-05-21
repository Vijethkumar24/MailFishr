import NavBar from "./common/NavBar.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import FooterSection from "./components/FooterSection.jsx";
import HeroSection from "./components/HeroSection.jsx";
import HomePage from "./components/HomePage";
import PartnersSection from "./components/Partners.jsx";
import ReviewSection from "./components/ReviewSection.jsx";
import UseCaseSection from "./components/UseCaseSection.jsx";

function App() {


  return (
    <>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <UseCaseSection />
      <PartnersSection />
      <ReviewSection />
      <FooterSection />
    </>
  )
}

export default App
