import React from "react";
import "./Service.css";

const servicesData = [
  {
    id: 1,
    title: "Web Design",
    description: "You can explore this category for your design ideas.",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Building scalable and interactive web applications.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Creating user-friendly and engaging interfaces.",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Boost your site's ranking with advanced SEO strategies.",
  },
  {
    id: 5,
    title: "E-Commerce Solutions",
    description: "Building feature-rich online stores for businesses.",
  },
  {
    id: 6,
    title: "App Development",
    description: "Developing high-performance mobile applications.",
  },
];

const Service = () => {
  return (
    <div id="services" className="tile">
      <h1>My Services</h1>

      <div className="services">
        {servicesData.map((service, index) => (
          <div key={service.id} className="services-con">
            <h3>{index + 1}</h3>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <div className="service-read">
              <p>Read More</p>
              <h3>
                <i className="fa-solid fa-arrow-right"></i>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
