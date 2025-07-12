import Hero from "./components/Hero";
import Cloud from "./components/Cloud";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Metrics from "./components/Metrics";
import Integration from "./components/Integration";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Brand Logos Cloud */}
      <Cloud />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Metrics Section */}
      <Metrics />

      {/* Integration Section */}
      <Integration />

      {/* Call to Action Section */}
      <Cta />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
