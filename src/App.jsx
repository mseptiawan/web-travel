import Hero from "./components/Hero";
import TrendingDestination from "./components/TrendingDestination";
import WhyChooseUs from "./components/WhyChooseUs";
import FleetGallery from "./components/FleetGallery";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TravelPackages from "./components/TravelPackages";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingDestination />
      <WhyChooseUs />
      {/* <FleetGallery /> */}
      <TravelPackages />
      <Footer />
    </>
  );
}
