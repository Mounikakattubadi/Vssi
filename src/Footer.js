import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3 ml-4">
            <h5>About Us</h5>
            <p className="small mb-2">
              Venkata Siva Sai Industries is a well-established company located in Kodad, Telangana. The company is recognized for its excellence in the rubber industry.
            </p>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none hover-text-primary">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none hover-text-primary">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-white text-decoration-none hover-text-primary">Our Products</Link>
              </li>
              <li className="mb-2">
                <Link to="/enquiryform" className="text-white text-decoration-none hover-text-primary">Enquiry</Link>
              </li>
              <li className="mb-2">
                <Link to="/contactus" className="text-white text-decoration-none hover-text-primary">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Our Products</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/crumrubber" className="text-white text-decoration-none hover-text-primary">Crumb Rubber</Link>
              </li>
              <li className="mb-2">
                <Link to="/epdm" className="text-white text-decoration-none hover-text-primary">EPDM Granules</Link>
              </li>
              <li className="mb-2">
                <Link to="/tyrewire" className="text-white text-decoration-none hover-text-primary">Tyre Wire</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Address :</h5>  
            <p className="small mb-2">
              Venkata Siva Sai Industries
              <br />242/A, REDLAKUNTA VILLAGE, KODAD MANDAL,
              <br />SURYAPET DIST, TELANGANA -508206, INDIA.
            </p>
            <p className="small mb-2">
              Admin Off :
              <br />#406, 4th Floor, Patel Towers, Above EasyBuy Beside Nagole RTO Office,
              <br />Nagole Hyderabad, Telangana-500068
            </p>
            <p className="mb-2">CONTACT NO:  +91 4049471616</p>
            <p className="mb-2">Email: info@vssi.in</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
