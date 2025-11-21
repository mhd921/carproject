import React from 'react';

// Home renders the landing Hero and the "Our Work" sections from the template.
// Images are served from public/assets/images so paths can be absolute from "/".
function Home() {
  return (
    <article>
      {/* Hero section with background image and call-to-action */}
      <section
        className="hero has-bg-image"
        aria-label="home"
        style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
      >
        <div className="container">
          <div className="hero-content">
            <p className="section-subtitle :dark">We have talented engineers & mechanics</p>
            <h1 className="h1 section-title">Auto Maintenance & Repair Service</h1>
            <p className="section-text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse Excepteur sint occaecat cupidatat non
              proident.
            </p>
            <a href="#" className="btn">
              <span className="span">Our Services</span>
              <span className="material-symbols-rounded">arrow_forward</span>
            </a>
          </div>

          <figure className="hero-banner" style={{ '--width': 1228, '--height': 789 }}>
            <img
              src="/assets/images/hero-banner.png"
              width="100%"
              height="200px"
              alt="red motor vehicle"
              className="move-anim"
            />
          </figure>
        </div>
      </section>

      {/* Work section: horizontally scrollable list of recent projects */}
      <section className="section work" aria-labelledby="work-label">
        <div className="container">
          <p className="section-subtitle :light" id="work-label">Our Work</p>
          <h2 className="h2 section-title">Latest projects we have done</h2>
          <ul className="has-scrollbar">
            <li className="scrollbar-item">
              <div className="work-card">
                <figure className="card-banner img-holder" style={{ '--width': 350, '--height': 406 }}>
                  <img
                    src="/assets/images/work-1.jpg"
                    width="350"
                    height="406"
                    loading="lazy"
                    alt="Engine Repair"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <p className="card-subtitle">Auto Repair</p>
                  <h3 className="h3 card-title">Engine Repair</h3>
                  <a href="#" className="card-btn">
                    <span className="material-symbols-rounded">arrow_forward</span>
                  </a>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="work-card">
                <figure className="card-banner img-holder" style={{ '--width': 350, '--height': 406 }}>
                  <img
                    src="/assets/images/work-2.jpg"
                    width="350"
                    height="406"
                    loading="lazy"
                    alt="Car Tyre change"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <p className="card-subtitle">Auto Repair</p>
                  <h3 className="h3 card-title">Car Tyre change</h3>
                  <a href="#" className="card-btn">
                    <span className="material-symbols-rounded">arrow_forward</span>
                  </a>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="work-card">
                <figure className="card-banner img-holder" style={{ '--width': 350, '--height': 406 }}>
                  <img
                    src="/assets/images/work-3.jpg"
                    width="350"
                    height="406"
                    loading="lazy"
                    alt="Battery Adjust"
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <p className="card-subtitle">Auto Repair</p>
                  <h3 className="h3 card-title">Battery Adjust</h3>
                  <a href="#" className="card-btn">
                    <span className="material-symbols-rounded">arrow_forward</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}

export default Home;

