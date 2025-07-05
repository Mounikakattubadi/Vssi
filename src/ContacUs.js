import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import abtimg from './images/inn1.webp';
import './ContactUs.css'

function ContactUs() {
  return (
    <div className="contact-us-container">
     <section className="contact-hero text-center text-white d-flex flex-column justify-content-center align-items-center">
  <h1 className="hero-heading">Contact Us</h1>
  <p className="hero-subtext">
    Get in touch with Venkata Siva Sai Industries — We're here to assist with your rubber recycling and product needs.
  </p>
</section>

      {/* Contact Info */}
      <div className="container mb-5 mt-5">
       
        <div className="row justify-content-center gy-4">
          <div className="col-md-5">
            <div className="card h-100 shadow-sm p-3">  
              <h5><i className="fas fa-map-marker-alt me-2"></i>Main Office</h5>
              <p className="mb-0"><strong>Venkata Siva Sai Industries</strong></p>
              <p className="mb-0">#406, 4th Floor, Patel Towers, Above EasyBuy Beside Nagole RTO Office,</p>
              <p className="mb-0">Nagole Hyderabad, Telangana-500068</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card h-100 shadow-sm p-3">
              <h5><i className="fas fa-map-marker-alt me-2"></i>Unit Address</h5>
              <p className="mb-0"><strong>UNIT ADDRESS:</strong></p>
              <p className="mb-0">242/A, REDLAKUNTA VILLAGE,</p>
              <p className="mb-0">KODAD MANDAL, SURYAPET DIST, TELANGANA 508206.</p>
            </div>
          </div>
          <div className="col-md-10">
            <div className="card shadow-sm p-3">
              <h5><i className="fas fa-phone-alt me-2"></i>Phone</h5>
              <p className="mb-0">TEL:+91 40494716163</p>
            </div>
          </div>
          <div className="col-md-10">
            <div className="card shadow-sm p-3">
              <h5><i className="fas fa-envelope me-2"></i>Email</h5>
              <p className="mb-0">info@vssi.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="container mb-5">
        <h2 className="text-center mb-4">Our Location</h2>
        <div className="map-container shadow-sm rounded overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.940906490419!2d78.5256073830437!3d17.369419164419583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f0e02a86dd%3A0x98c227bc184df830!2sMN%20Reddy%20Complex!5e0!3m2!1sen!2sin!4v1747980344378!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* FAQ */}
      <div className="container mb-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How can I get in touch with customer service?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can reach us via the form above or by calling +91 4049471616 during business hours.
              </div>
            </div>
          </div>

          <div className="accordion-item mt-2">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Where are you located?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Venkata Siva Sai Industries<br />
               #406, 4th Floor, Patel Towers, Above EasyBuy Beside Nagole RTO Office, Nagole Hyderabad, Telangana-500068
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
