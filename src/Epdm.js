import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Epdm.css';
import { Link } from 'react-router-dom';
import abtimg from './images/inn1.webp';
import epdm1 from './images/epdm1.jpg';
import epdm2 from './images/epdm2.jpg';
import epdm3 from './images/epdm3.jpg';
import { useEffect } from 'react';
import cte from "./images/cte.jpg";

import epdm4 from './images/epdm4.jpg';

const Epdm = () => {
   useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      {/* Top Banner */}
     
      <div className="container-fluid p-0">
        <img 
          src={cte} 
          alt="Company products" 
          className="img-fluid abtimg" 
        />
      </div>

      {/* Section 1: Description Right, Carousel Left */}
      <div className="container my-5 epdm-section bg-light rounded p-4">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div id="epdmCarousel1" className="carousel slide epdm-carousel" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={epdm1} className="d-block w-100 epdm-carousel-image" alt="EPDM 1" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 text-justify">
            <h2>EPDM Colored Rubber Granules</h2>
            <p>
              EPDM colored rubber granules are increasingly popular for commercial and private sports playgrounds due to their multifunctional design.
              These granules combine special polymer compounds with various components to form a durable, versatile material.
            </p>
            <p>
              Their structure offers UV resistance, aesthetic appeal, and durability—ideal for sports flooring.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Carousel Right, Description Left */}
      <div className="container my-5 epdm-section bg-light rounded p-4">
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-5">
            <div id="epdmCarousel2" className="carousel slide epdm-carousel" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active"><img src={epdm2} className="d-block w-100 epdm-carousel-image" alt="EPDM 2" /></div>
                <div className="carousel-item"><img src={epdm3} className="d-block w-100 epdm-carousel-image" alt="EPDM 3" /></div>
                <div className="carousel-item"><img src={epdm4} className="d-block w-100 epdm-carousel-image" alt="EPDM 4" /></div>
              </div>
              <button className="carousel-control-prev epdm-control" type="button" data-bs-target="#epdmCarousel2" data-bs-slide="prev">
                <span className="carousel-control-prev-icon epdm-arrow" aria-hidden="true"></span>
              </button>
              <button className="carousel-control-next epdm-control" type="button" data-bs-target="#epdmCarousel2" data-bs-slide="next">
                <span className="carousel-control-next-icon epdm-arrow" aria-hidden="true"></span>
              </button>
            </div>
          </div>
          <div className="col-md-7 text-justify">
            <h2>Benefits of EPDM Colored Rubber Granules</h2>
            <ul>
              <li>Durable, robust, and highly resilient</li>
              <li>Combines power and breathability</li>
              <li>Allows water permeability</li>
              <li>Environmentally friendly</li>
              <li>Offers versatility</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 3: Description Right, Carousel Left */}
      <div className="container my-5 epdm-section bg-light rounded p-4">
        <div className="row align-items-center">
          <div className="col-md-5">
            <img src={epdm4} className="d-block w-100 epdm-carousel-image" alt="EPDM Final" />
          </div>
          <div className="col-md-7 text-justify">
            <h2>Applications of EPDM Granules</h2>
            <p>
              Used in sports grounds, playgrounds, courtyards, and multipurpose athletic tracks. Ideal for high-impact zones.
            </p>
            <p>
              Shock-absorbing, elastic, and resistant to wear—designed for safety and longevity in outdoor flooring.
            </p>
          </div>
        </div>
      </div>
      {/* Enquire Section */}
              <div className="text-center mt-5 mb-5">
               
                <Link to="/EnquiryForm" className="btn btn-primary px-4 py-2 enquire-btn">
                  Enquire Now
                </Link>
              </div>
    </div>
  );
};

export default Epdm;
