import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Link } from 'react-router-dom';

import homeimg2 from "./images/homeimg2.jpg";
import crumrubberimg from "./images/crumrubberimg.jpg";
import epdmimg from "./images/epdmimg.jpg";
import tyrewireimg from "./images/tyrewireimg.jpg";
import scrollimg1 from "./images/scrollimg1.jpg";
import scrollimg2 from "./images/scrollimg2.jpg";
import scrollimg3 from "./images/scrollimg3.jpg";
import scrollimg4 from "./images/scrollimg4.jpg";
import scrollimg5 from "./images/scrollimg5.jpg";
import cte from "./images/cte.jpg";

function Home() {
  const productRef = useRef(null);

  const handleScrollToProducts = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>

      {/* Carousel Section */}
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[cte,homeimg2, scrollimg4, ].map((img, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <img src={img} className="d-block w-100 carousel-img" alt={`slide-${index}`} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
                <h5>Venkata Siva Sai Industries</h5>
                <p>Finest Quality Rubber Product</p>
                <button className="btn btn-light" onClick={handleScrollToProducts}>Explore Products</button>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>


<section className="about-section text-center py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 mb-4 mb-md-0">
        <img src={scrollimg4} alt="About Us" className="img-fluid rounded shadow about-img" />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center text-md-center text-center">
        <h2 className="section-heading mb-4">About Us</h2>
        <p className="about-text text-dark">
          Venkata Siva Sai Industries located in Kodad, Telangana, India is a renowned name
          among Rubber Industries. We manufacture high-quality Rubber Crumb and Rubber Granules,
          compliant with national standards and international test methods.
        </p>
        <Link to="/about" className="btn btn-outline-dark mt-3 mx-auto">Learn More</Link>
      </div>
    </div>
  </div>
</section>



      {/* Products Section */}
      <section className="products-section text-center text-dark py-5" ref={productRef}>
        <div className="container">
          <h2 className="products-heading mb-4">Our Products</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 product-card shadow">
                <img src={crumrubberimg} className="card-img-top" alt="Crumb Rubber" />
                <div className="card-body">
                  <h5 className="card-title">Crumb Rubber</h5>
                  <p className="card-text">Crumb rubber is made by reducing scrap tires into granules. Inherent reinforcing materials, such as steel and fiber.</p>
                  <Link to="/crumrubber" className="btn btn-primary">View More</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 product-card shadow">
                <img src={epdmimg} className="card-img-top" alt="EPDM Granules" />
                <div className="card-body">
                  <h5 className="card-title">EPDM Granules</h5>
                  <p className="card-text">EPDM colored rubber granules for commercial and private playgrounds, ensuring durability and safety.</p>
                  <Link to="/epdm" className="btn btn-primary">View More</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 product-card shadow">
                <img src={tyrewireimg} className="card-img-top" alt="Tyre Wire" />
                <div className="card-body">
                  <h5 className="card-title">Tyre Wire</h5>
                  <p className="card-text">Tyre Derived Steel (TDS) is obtained during the shredding of waste tyres. Ideal for recycling industries.</p>
                  <Link to="/tyrewire" className="btn btn-primary">View More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Image Section */}
      <section className="scrolling-container text-center my-5">
        <h4 className="mb-4">Gallery</h4>
        <div className="scrolling-grid">
          {[scrollimg1, scrollimg2, scrollimg3, scrollimg4, scrollimg5, tyrewireimg].map((img, idx) => (
            <img key={idx} src={img} alt={`Gallery ${idx + 1}`} className="scroll-img" />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
