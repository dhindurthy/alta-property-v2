import React from "react";
import emailjs from "emailjs-com";

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = { successMessage: "" };
    this._onSubmit = this._onSubmit.bind(this);
  }
  componentDidMount() {
    (function () {
      emailjs.init("user_Aq5OpcGj199IxwFbbkVRN");
    })();
  }
  _onSubmit(event) {
    event.preventDefault();
    var template_id = "template_vlAfnQhW";
    var service_id = "default_service";
    var template_params = {
      reply_to: "reply_to_value",
      from_name: "from_name_value",
      to_name: "to_name_value",
      message_html: "message_html_value"
    };
    emailjs.sendForm(service_id, template_id, "#contact-form");
    document.getElementById("contact-form").reset();
    this.setState({
      successMessage: "Your email has been sent!"
    });
  }

  render() {
    return (
      <div className="email-form">
        <h2>Contact Us</h2>
        <h4>
          Have a question or comment? Need a quote? Message us and we will get
          right back to you.
        </h4>
        <form id="contact-form" onSubmit={this._onSubmit.bind(this)}>
          <label>Name</label>
          <input
            type="text"
            name="from_name"
            required
            onInvalid={(e) => {
              e.target.setCustomValidity("Please enter your Name.");
            }}
          />
          <label>Email</label>
          <input
            type="email"
            name="from_email"
            required
            onInvalid={(e) => {
              e.target.setCustomValidity("Please enter your Email ID.");
            }}
          />
          <label>Phone Number</label>
          <input
            type="number"
            name="contact_number"
            required
            minlength="10"
            onInvalid={(e) => {
              e.target.setCustomValidity("Please enter your Phone Number.");
            }}
          />
          <label>Message</label>
          <textarea
            name="message_html"
            required
            rows="8"
            onInvalid={(e) => {
              e.target.setCustomValidity(
                "Please enter the reason for contacting us in brief."
              );
            }}
          ></textarea>
          <input type="submit" value="Send Email" />
        </form>
        <h3 className="success-message">{this.state.successMessage}</h3>
        <div className="contact-image">
          <img
            src="https://altapropertyservices.com/wp-content/uploads/2017/12/M1web.jpg"
            alt=""
            width="800"
            height="400"
          />
        </div>
      </div>
    );
  }
}
