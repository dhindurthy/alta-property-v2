import React from "react";
import Carousel from "../components/carousel.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Services(props) {
  let articles = [
    { name: "donkey" },
    { name: "buffalo" },
    { name: "pig" },
    { name: "cow" },
    { name: "sheep" },
    { name: "monkey" }
  ];
  return (
    <section className="service-page">
      <section className="service-section">
        <h2 className="service-heading">
          WE CAN PROVIDE ALL YOUR PROPERTY SERVICES
        </h2>
        <p>
          Alta Property Services began with a small crew mowing lawns for REO
          and REI distressed properties. Soon our customers, appreciating our
          can-do attitude and attention to detail, asked us to take on larger
          jobs and to provide more services such as secured services,
          maintenance, landscaping, and remodeling. Today, after years of
          delivering quality property services to satisfied customers, Alta is
          now one of Chicago’s fastest growing commercial and residential
          multi-service providers.
        </p>
        <Carousel
          leftButton="<"
          rightButton=">"
          showBanner={false}
          sliders={articles}
          textBetweenButtons={(activeKey) => (
            <span>{/* {activeKey + 1} de {this.state.articles.length} */}</span>
          )}
          banner="Established and proudly serving since 2001"
          panelContent={(i, index) =>
            (index === 1 && (
              <section style={{ backgroundColor: "purple" }}>
                <img
                  width="900"
                  height="400"
                  src="https://via.placeholder.com/900"
                  alt="somethign"
                />
              </section>
            )) ||
            (index === 4 && (
              <section style={{ backgroundColor: "red" }}>
                <img
                  width="900"
                  height="400"
                  src="https://via.placeholder.com/900"
                  alt="somethign"
                />
              </section>
            )) ||
            (index === 5 && (
              <section style={{ backgroundColor: "yellow" }}>
                <img
                  width="900"
                  height="400"
                  src="https://via.placeholder.com/900"
                  alt="somethign"
                />
              </section>
            )) ||
            (index === 2 && (
              <section style={{ backgroundColor: "orange" }}>
                <img
                  width="900"
                  height="400"
                  src="https://via.placeholder.com/900"
                  alt="somethign"
                />
              </section>
            )) ||
            (index === 3 && (
              <section style={{ backgroundColor: "green" }}>
                <img
                  width="900"
                  height="400"
                  src="https://via.placeholder.com/900"
                  alt="somethign"
                />
              </section>
            )) || (
              <section style={{ backgroundColor: "blue" }}>
                <img
                  width="900"
                  height="400"
                  src="https://via.placeholder.com/900"
                  alt="somethign"
                />
              </section>
            )
          }
        />
        <p className="service-description">
          Alta Property Services began with a small crew mowing lawns for REO
          and REI distressed properties. Soon our customers, appreciating our
          can-do attitude and attention to detail, asked us to take on larger
          jobs and to provide more services such as secured services,
          maintenance, landscaping, and remodeling. Today, after years of
          delivering quality property services to satisfied customers, Alta is
          now one of Chicago’s fastest growing commercial and residential
          multi-service providers.
        </p>
        <h2 className="service-heading">OUR SERVICES</h2>
        <div className="image-gallery">
          <Link tabIndex="0" role="menuitem" to="/repairsandrehab">
            <img
              src="https://altapropertyservices.com/wp/wp-content/uploads/2017/09/Repairs-Rehabs.jpg"
              alt=""
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/securedservices">
            <img
              src="https://altapropertyservices.com/wp/wp-content/uploads/2015/11/Secured.jpg"
              alt=""
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/trashout">
            <img
              src="https://altapropertyservices.com/wp/wp-content/uploads/2015/11/Trash-1.jpg"
              alt=""
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/remediationservices">
            <img
              src="https://altapropertyservices.com/wp/wp-content/uploads/2017/09/Remdiations.jpg"
              alt=""
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/winterization">
            <img
              src="https://altapropertyservices.com/wp/wp-content/uploads/2015/11/Winter.jpg"
              alt=""
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/landscaping">
            <img
              src="https://altapropertyservices.com/wp/wp-content/uploads/2015/11/Land.jpg"
              alt=""
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/snowremoval">
            <img
              src="https://altapropertyservices.com/wp/wp-content/uploads/2015/11/Snow.jpg"
              alt=""
            />
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Services;
