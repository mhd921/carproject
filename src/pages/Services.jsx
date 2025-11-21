import React, { useState } from 'react';

// Static list of services used to render cards
const SERVICE_ITEMS = [
  {
    id: 'engine-repair',
    icon: '/assets/images/services-1.png',
    title: 'Engine Repair',
    excerpt:
      'Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles',
    more:
      'This is more information about Engine Repair. We provide comprehensive diagnostics and repairs for all engine types.',
  },
  {
    id: 'brake-repair',
    icon: '/assets/images/services-2.png',
    title: 'Brake Repair',
    excerpt:
      'Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles',
    more:
      'We offer complete brake diagnostics, pad replacement, and system repairs for safe driving.',
  },
  {
    id: 'tire-repair',
    icon: '/assets/images/services-3.png',
    title: 'Tire Repair',
    excerpt:
      'Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles',
    more:
      'Our tire services include puncture repair, balancing, and replacement for all vehicle types.',
  },
  {
    id: 'battery-repair',
    icon: '/assets/images/services-4.png',
    title: 'Battery Repair',
    excerpt:
      'Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles',
    more:
      'We test, replace, and maintain batteries to keep your vehicle starting reliably.',
  },
  {
    id: 'steering-repair',
    icon: '/assets/images/services-6.png',
    title: 'Steering Repair',
    excerpt:
      'Autem velaum iure reare aenderit rui in ea roluptate esse ruam moles',
    more:
      'Our experts handle steering issues, from alignment to power steering repairs.',
  },
];

function Services() {
  // Track which service cards are expanded (Read more)
  const [expanded, setExpanded] = useState({});

  // Toggle the expanded flag for a given service id
  const toggle = (id) => setExpanded((s) => ({ ...s, [id]: !s[id] }));

  return (
    <section
      className="section service has-bg-image"
      aria-labelledby="service-label"
      style={{ backgroundImage: "url('/assets/images/service-bg.jpg')" }}
    >
      <br/>
<br/>
<br/>
<br/>
      <div className="container">
        <p className="section-subtitle :light" id="service-label">Our services</p>
        <h2 className="h2 section-title">We Provide Great Services For your Vehicle</h2>

        {/* Render a card for each service */}
        <ul className="service-list">
          {SERVICE_ITEMS.map((item) => (
            <li key={item.id}>
              <div className="service-card">
                <figure className="card-icon">
                  <img src={item.icon} width="110" height="110" loading="lazy" alt={item.title} />
                </figure>
                <h3 className="h3 card-title">{item.title}</h3>
                <p className="card-text">
                  {item.excerpt}{' '}
                  <span className="more-text" style={{ display: expanded[item.id] ? 'inline' : 'none' }}>
                    {` ${item.more}`}
                  </span>
                </p>
                {/* Toggle expanded text without full page navigation */}
                <a
                  href="#"
                  className="btn-link read-more-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    toggle(item.id);
                  }}
                >
                  {expanded[item.id] ? 'Read less' : 'Read more'}
                </a>
              </div>
            </li>
          ))}
        </ul>

        <a href="#" className="btn">
          <span className="span">View All Services</span>
          <span className="material-symbols-rounded">arrow_forward</span>
        </a>
      </div>
    </section>
  );
}

export default Services;

