import React, { useEffect, useState } from 'react';
import './App.css';
import "./assets/styles.css";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Header from './components/Header';
import HeroSection from './components/Hero';
import CTA from './components/CTA';
import AspmJourney from './components/Journey';
import CustomerSection from './components/Section2';
import SectionHeading from './components/Heading';
function App() {
  const [activeSection, setActiveSection] = useState('');
  const [showGoToTop, setShowGoToTop] = useState(false);
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const options = {
      root: null, // viewport
      threshold: 0.5, // trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Set active section based on the section's class
          console.log(entry.target.id)
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling 300px from the top
      if (window.scrollY > 300) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scroll effect
    });
  };
  return (
    <>

      {(activeSection && activeSection !== 'home') && (
        <div className="fixed top-0 bg-white p-8  left-0 z-50 w-auto font-primary text-2xl  font-medium py-4">
          <h2>{capitalizeFirstLetter(activeSection)}</h2>
        </div>
      )}



      <div className='relative' id="home">
        <Header />
        <HeroSection />
        <svg className="absolute bottom-0 hidden md:block left-0 w-[79%] h-auto opacity-15 -z-1 moveEdgeBg" width="785" height="397" viewBox="0 0 785 397" fill=" #D9F3FF" xmlns="http://www.w3.org/2000/svg">
          <path d="M299.5 74.6489C189.864 120.225 12.9963 169.079 0.679728 172.463C0.245011 172.582 0 172.962 0 173.412V395.649C0 396.201 0.447721 396.649 1.00001 396.649H783.527C784.068 396.649 784.511 396.237 784.522 395.695C784.716 386.813 785.877 317.948 776.5 274.649C761.466 205.233 747.5 173.5 700 109.649C653.657 47.3529 609.737 5.22882 531.5 0.648922C435 -5.00005 410.5 28.5061 299.5 74.6489Z" fill="white" />
        </svg>
      </div>

      <main>
        <div className='p-0'>
          <section className="customer" id="product">
            <CustomerSection />
          </section>


          <section className="journey" id="benefits">
            <AspmJourney />
          </section>



          <section className="services" id="about us">
            <Services />
          </section>



        </div>
        <section className="cta" id="get A Demo">
          <CTA />
        </section>


      </main>

      {showGoToTop && (
        <a href="#">
          <button
            className="fixed bottom-24 right-5  p-3 py-2 bg-buttonBg text-white rounded-md "
            onClick={scrollToTop}
          >
            &#8679;
          </button></a>
      )}


      <Footer />

    </>
  );
}
// Utility function to capitalize the first letter
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default App;
