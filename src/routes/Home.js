import React from "react";
import Carousel from "../components/carousel.jsx";
// import CarouselDemo from "../components/carouseldemo.jsx";

class Home extends React.Component {
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
    return (
      <section>
        <section className="body">
          <Carousel
            leftButton="<"
            rightButton=">"
            showBanner={true}
            sliders={this.state.articles}
            textBetweenButtons={(activeKey) => (
              <span>
                {/* {activeKey + 1} de {this.state.articles.length} */}
              </span>
            )}
            banner="Proudly Serving Greater Chicago Since 2010"
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
        </section>

        <h2 className="h2-content" tabIndex="0">
          <hr />
          ALTA Property Services
          <hr />
        </h2>
        <section className="articles-main">
          <article tabIndex="0">
            <h3>About Us</h3>Alta is your top choice for all your commercial or
            residential property & preservation services. You can count on us!
          </article>
          <article tabIndex="0">
            <h3>Our Services</h3>Alta Property Services is one of Chicago’s
            fastest growing commercial and residential multi-service providers.
            <br />
            Below are some services we provide.
            <br />
            Landscaping, Snow Removal, Repairs and Rehab, Trash Out, Secured
            Services, Remediation Services, Winterization
          </article>
        </section>
      </section>
    );
  }
}

export default Home;
