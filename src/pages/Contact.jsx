import React, { useState } from 'react';

// Contact page uses a controlled form and shows a simple success message
// after handling submit on the client side (no backend calls).
function Contact() {
  // Controlled inputs live in one state object
  const [form, setForm] = useState({ name: '', email: '', number: '', message: '' });
  // Toggles between showing the form and the success message
  const [sent, setSent] = useState(false);

  // Update a single field based on its "name" attribute
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  // Prevent full page reload and mark as sent
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    // Contact page: controlled form with client-side confirmation only
    <section className="section" style={{ paddingTop: '20px' }}>
      <div className="container"><br/>
<br/>
<br/>
<br/>
        <h2 className="h2 section-title">Contact Us</h2>

        {/* If not sent yet, render the form; otherwise show success text */}
        {!sent ? (
          <form className="contact-form" style={{ maxWidth: '600px', margin: 'auto' }} onSubmit={onSubmit}>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                required
                style={{ width: '100%', padding: '10px' }}
                value={form.name}
                onChange={onChange}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                required
                style={{ width: '100%', padding: '10px' }}
                value={form.email}
                onChange={onChange}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="number" className="form-label">Your Number</label>
              <input
                type="number"
                id="number"
                name="number"
                className="form-input"
                required
                style={{ width: '100%', padding: '10px' }}
                value={form.number}
                onChange={onChange}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="form-input"
                required
                style={{ width: '100%', padding: '10px' }}
                value={form.message}
                onChange={onChange}
              />
            </div>
            <button type="submit" className="btn" style={{ display: 'flex', alignItems: 'center' }}>
              <span className="span">Send Message</span>
              <span className="material-symbols-rounded">arrow_forward</span>
            </button>
          </form>
        ) : (
          // Simple success feedback; in a real app this could reset form or navigate
          <p className="section-text" style={{ textAlign: 'center', marginTop: 20 }}>
            Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;

