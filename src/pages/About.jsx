import React from 'react';

// About shows the brand banner image and key company stats from the template.
// Spacing is added at the top to avoid the fixed header overlapping the content.
function About() {
  return (
    <section className="section about has-before" aria-labelledby="about-label">
        {/* Offset from fixed header on small screens */}
        <br/>
<br/>
<br/>
<br/>
      <div className="container">
        {/* Banner image */}
        <figure className="about-banner">
          <img
            src="/assets/images/about-banner.png"
            width="540"
            height="540"
            loading="lazy"
            alt="vehicle repire equipments"
            className="w-100"
          />
        </figure>

        {/* Description and stats */}
        <div className="about-content">
          <p className="section-subtitle :dark" id="about-label">About Us</p>
          <h2 className="h2 section-title">We’re Commited to Meet the quality</h2>
          <p className="section-text">
            Quis autem vel eum iure reprehenderit qui in ea volu velit esse quam nihil molestiae consequatur, vel illum
            eui dolorem eum fugiat ruo.
          </p>
          <p className="section-text">
            Reprehenderit qui in ea volu velit esse quam nihil moe stiae consequatur, vel illum eui.
          </p>

          <ul className="about-list">
            <li className="about-item">
              <p>
                <strong className="display-1 strong">8K+</strong> Happy Clients
              </p>
            </li>
            <li className="about-item">
              <p>
                <strong className="display-1 strong">22+</strong> Instruments
              </p>
            </li>
            <li className="about-item">
              <p>
                <strong className="display-1 strong">50+</strong> Years in market
              </p>
            </li>
            <li className="about-item">
              <p>
                <strong className="display-1 strong">99%</strong> Projects completed
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

