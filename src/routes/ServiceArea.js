import React from "react";

function ServiceArea(props) {
  return (
    <section>
      <h3>ServiceArea Page</h3>
      <p className="heading">
        The below map shows the coverage area for our services. If you do not
        find your area as part of it, please contact us to find out. Call us at
        630.461.9229
      </p>
      <p>
        <iframe
          className="area"
          title="Service Area"
          src="https://www.google.com/maps/d/embed?mid=16F6mKEmellCuVJKRzKQkT0XiYig98dd2"
          width="1200"
          height="720"
        ></iframe>
      </p>
    </section>
  );
}

export default ServiceArea;
