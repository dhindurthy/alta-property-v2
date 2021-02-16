import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Select from "./select.jsx";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(props) {
    return (
      <section className="menu">
        <ul className="menu-ul">
          {this.props.menuData.map((item, index) => (
            <li key={index}>
              {item.type === "dropdown" && <Select field={item} />}
              {/* {item.type === "image" && <img alt="birds" src="./qwe.jpg" />} */}
              {!item.type && (
                // <span className="li-presentation" tabIndex="0">
                //   {item.label}
                // </span>
                <Link tabIndex="0" role="menuitem" to={item.value}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Menu;
