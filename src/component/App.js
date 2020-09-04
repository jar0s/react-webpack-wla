import React from "react";
import PropTypes from "prop-types";
import Display from "./Display";
import ButtonPanelWrapper from "ButtonPanelWrapper";
import calculate from "../logic/calculate";
import "App.css";

export default class App extends React.Component {
  static propTypes = {
    displayAtBottom: PropTypes.bool
  };
  
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    let first, second;
    let buttonPanel = <ButtonPanelWrapper clickHandler={this.handleClick} />;
    let display = <Display value={this.state.next || this.state.total || "0"} />;

    if (this.props.displayAtBottom) {
      first = buttonPanel;
      second = display;
    } else {
      first = display;
      second = buttonPanel;
    }

    return (
        <div className="component-app">
          {first}
          {second}
        </div>
      );
  }
}
