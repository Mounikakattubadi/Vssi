import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-page">

      {/* Top Section with Heading and Intro */}
      <section className="about-hero text-center text-white d-flex flex-column justify-content-center align-items-center">
        <h1 className="hero-heading">About Us</h1>
        <p className="hero-subtext">
          About Venkata Siva Sai Industries — A trusted name in rubber recycling and product excellence.
        </p>
      </section>

      {/* Detailed About Content Section */}
      <section className="about-content container py-5">
        <h2 className="section-heading mb-4">Who We Are</h2>
        <p>
          Venkata Siva Sai Industries located in Kodad, Telangana, India, is a renowned name among Rubber Industries.
          At Venkata Siva Sai Industries, consistent quality of Rubber Crumb and Rubber Granules at various grades of Factice
          are manufactured compliant with all requirements of relevant national standards and tested as per prevalent
          internationally accepted test methods.
        </p>
        <p>
          During these years of journey, Venkata Siva Sai Industries has recorded continuous growth and has served its customers
          delightfully with quality of product as well as services for a wide range of product applications such as Automotive &
          OTR tyres, Conveyor belts, Moulded & Extruded Rubber products — PAN India as well as globally.
        </p>
        <p>
          The company operates its processes complying with the requirements of Quality Management System, Environment Management System,
          and Health and Safety Management System.
        </p>
      </section>

    </div>
  );
};

export default About;
