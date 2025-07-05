import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import cte from "./images/cte.jpg";
import abtimg from './images/inn1.webp';
import tw1 from './images/tw1.jpg';
import tw2 from './images/tw2.jpg';
import './CrumRubber.css';
import { useEffect } from 'react';

const TyreWire = () => {
   useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      {/* Top Banner Image */}
      <div className="container-fluid p-0">
        <img 
          src={cte} 
          alt="Company products" 
          className="img-fluid abtimg" 
        />
      </div>

      {/* Content Section */}
      <div className="container my-5 py-4 custom-carousel-section rounded">
        <div className="row align-items-center">
          
          {/* Carousel - Left Side */}
          <div className="col-md-5">
            <div id="carouselTyreWire" className="carousel slide tyre-carousel" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img 
                    src={tw1} 
                    className="d-block mx-auto carousel-image" 
                    alt="Tyre Wire 1" 
                  />
                </div>
                <div className="carousel-item">
                  <img 
                    src={tw2} 
                    className="d-block mx-auto carousel-image" 
                    alt="Tyre Wire 2" 
                  />
                </div>
              </div>

              {/* Custom Styled Controls */}
              <button className="carousel-control-prev custom-control" type="button" data-bs-target="#carouselTyreWire" data-bs-slide="prev">
                <span className="carousel-control-prev-icon custom-arrow" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next custom-control" type="button" data-bs-target="#carouselTyreWire" data-bs-slide="next">
                <span className="carousel-control-next-icon custom-arrow" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Text - Right Side */}
          <div className="col-md-7 text-justify">
            <h2 className="mb-4">Tyre Wire</h2>
            <p>
              Tyre Wire Scrap, also known as TDS (Tyre Derived Steel), is a light melting scrap obtained during the shredding process of waste tyres. 
              It mainly consists of high-tensile steel wires used to reinforce tyres and is separated during tyre recycling.
            </p>
            <p>
              After mechanical processing, the wire is recovered, cleaned, and used as a raw material for steel production in furnaces and foundries. 
              This process supports the circular economy by reusing valuable materials and reducing dependence on natural resources.
            </p>
          </div>
        </div>

        {/* Enquire Section */}
        <div className="text-center mt-5">
         
          <Link to="/EnquiryForm" className="btn btn-primary px-4 py-2 enquire-btn">
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TyreWire;
