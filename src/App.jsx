/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import Home from "./components/home/Home";
import Team from "./components/team/Team";
// import About from './components/about/About'
import Footer from "./components/footer/Footer";
import Testimonials from "./components/testimonials/Testimonials";
import Skills from "./components/skills/Skills";
import Projects from './components/projects/Projects';
import Contact from "./components/contact/Contact";

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false); 
    }, 5000); 
  }, []);

  return (
    <div className="App">
      {loader ? (
        <div class="loader"></div>
      ) : (
        <>
          <Navbar />
          <div>
            <Home />
            {/* <About /> */}
            <Projects />
            <Skills />
            <Team />
            <Testimonials />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

