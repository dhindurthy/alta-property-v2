import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: {},
      value: this.props.field.value,
      showAllOptions: false
    };
    this._changeOption = this._changeOption.bind(this);
    this._clickElement = this._clickElement.bind(this);
    this._hoverElement = this._hoverElement.bind(this);
    this._leaveElement = this._leaveElement.bind(this);
  }
  _changeOption(e) {
    let field = this.props.field;
    let selectedOption;
    let options = field.options;
    for (let a = 0; a < options.length; a++) {
      if (options[a].value === e.target.value) {
        selectedOption = options[a];
      }
    }
    selectedOption.type = "select-option";
    this.setState((state) => ({
      selectedOption: selectedOption
    }));
    this.props.sendSelectedOption(selectedOption);
  }
  _clickElement() {
    this.setState((state) => ({
      showAllOptions: true
    }));
  }
  _hoverElement() {
    this.setState((state) => ({
      showAllOptions: true
    }));
  }
  _leaveElement() {
    this.setState((state) => ({
      showAllOptions: false
    }));
  }
  render(props) {
    return (
      <div
        className="select-component"
        onMouseEnter={this._hoverElement.bind(this)}
        onMouseLeave={this._leaveElement.bind(this)}
      >
        {/* <button >{"Services"}</button> */}
        <Link
          onClick={this._clickElement.bind(this)}
          tabIndex="0"
          role="menuitem"
          to={this.props.field.value}
        >
          {this.props.field.label}
        </Link>
        {/* <select
          value={this.state.value}
          // defaultValue={this.props.field.value}
          onChange={this._changeOption.bind(this)}
        >
          <option value="">Services</option>
          {this.props.field.options.map((item, index) => (
            <option key={item.label} value={item.value}>
              {item.label}
            </option>
          ))}
        </select> */}
        {this.state.showAllOptions && (
          <ul className="menu-list">
            {this.props.field.options.map((item, index) => (
              <li key={item.label} value={item.value}>
                <Link tabIndex="0" role="menuitem" to={item.value}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Select;
