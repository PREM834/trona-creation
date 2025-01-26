import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Sourcing from "./components/Sourcing";
import Fabrics from "./components/Fabrics";
import Future from "./components/Future";
import Strengths from "./components/Strengths";
import CustomerProfile from "./components/CustomerProfile";
import Founder from "./components/Founder";
import Products from "./components/Products";
import CollectionPage from "./components/CollectionPage";
import Sustainability from "./components/Sustainability";
import Contact from "./components/Contact";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <ScrollToSection />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Philosophy />
                <Sourcing />
                <Fabrics />
                <Products />
                <Future />
                <Strengths />
                <CustomerProfile />
                <Sustainability />
                <Founder />
                <Contact />
              </>
            }
          />
          <Route path="/collection/:type" element={<CollectionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
