import React from 'react';
import './App.css';
import logo from './images/logo.svg';
import heroImageDesktop from './images/bg1.jpg';

function App() {
  return (
    <div className="App">
      <div className="mobile-container">
        <header>
          <section className="hero-banner">
            {/* <img src="./images/logo.svg" alt="" /> */}
            <div className="logo-wrapper">

              <img src={logo} alt="logo" style={{ height: "4.5rem" }} />
            </div>
            <div className="hero-image"></div>
          </section>
        </header>
        <main>
          <article className="text-info">
            <h2>We're</h2>
            <h2>Coming Soon</h2>
            <p>FortiMinds is a group of passionate security professionals with 100+ years of combined experience. We create security products for security engineers like us.</p>
            <section className="email-signup">
              <form>
                {/* Uncomment and complete form when needed */}
                {/* 
                <input className="email-input" type="email" required placeholder="Email Address" name="email-address" />
                <input className="email-submit" value="Go" type="submit" text="Go" />
                */}
              </form>
            </section>
          </article>
        </main>
      </div>
      <div className="hero-image-desktop">
        <img src={heroImageDesktop} alt="Female athlete squinting towards the camera." />
      </div>
    </div>
  );
}

export default App;
