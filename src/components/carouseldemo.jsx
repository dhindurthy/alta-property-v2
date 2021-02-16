import React from "react";
import "../style.scss";
import Button from "./button.jsx";
import Carousel from "./carousel.jsx";

class CarouselDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    this.setState({
      articles: [
        { name: "donkey" },
        { name: "buffalo" },
        { name: "pig" },
        { name: "cow" },
        { name: "sheep" },
        { name: "monkey" }
      ]
    });
  }

  render() {
    return <section className="carousel-main"></section>;
  }
}

export default CarouselDemo;
