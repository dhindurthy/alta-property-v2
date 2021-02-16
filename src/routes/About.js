import React from "react";

function About(props) {
  return (
    <section className="about-page">
      <h3 className="about-headings">
        WE CAN PROVIDE ALL YOUR PROPERTY SERVICES
      </h3>
      <p>
        Alta Property Services began with a small crew mowing lawns for REO and
        REI distressed properties. Soon our customers, appreciating our can-do
        attitude and attention to detail, asked us to take on larger jobs and to
        provide more services such as secured services, maintenance, landscaping
        and remodeling. Today, after years of delivering quality property
        services to satisfied customers, Alta is now one of Chicago’s fastest
        growing commercial and residential multi-service providers.
      </p>
      <p>
        Alta is your one-stop shop that does it all for you by offering a broad
        range of services for the development, management, and maintenance of
        your property. We have maximized our assets and expertise in order to
        efficiently provide high-quality work on schedule and at competitive
        prices. Property managers and homeowners know that personal stress and
        cost overruns can build up fast when using multiple contractors. With
        our extensive resources and attentive staff, we can do all the work
        allowing you to focus on your business.{" "}
      </p>
      <h3 className="about-headings">
        WE CUSTOMIZE OUR JOBS TO MEET YOUR NEEDS
      </h3>
      <p>
        Before any work on a project begins, Alta creates a custom service
        solution built to meet our client’s needs. Whether your property is
        commercial or residential, large or small– we listen carefully to you to
        understand your needs. Then our team designs a solution that meets your
        goals, schedule, and budget. This strategic planning with you helps us
        to proactively identify potential issues –saving time and money that is
        passed on to you.
      </p>
      <h3 className="about-headings">
        {" "}
        WE BUILT OUR BUSINESS ON CUSTOMER SATISFACTION
      </h3>
      <p>
        We are grateful to our loyal customers who helped Alta grow from a small
        maintenance operation to the respected multi-service provider we are
        today. We remain dedicated to our original can-do attitude that kept
        those customers coming back. At Alta Property Services we are never
        satisfied until the customer is 100% satisfied. Got a job? We can do it
        and we can do it right.{" "}
      </p>

      <h4>
        <span className="pres-name"> Ron Chuman </span> |{" "}
        <span className="comp-name">President, Alta Property Services</span>
      </h4>
      <div className="contact-image">
        <img
          src="https://altapropertyservices.com/wp-content/uploads/2015/04/contactus2.jpg"
          alt=""
          width="600"
          height="300"
        />
      </div>
    </section>
  );
}

export default About;
