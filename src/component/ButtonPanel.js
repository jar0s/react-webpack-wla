import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    buttonsMatrix: PropTypes.array
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    let matrix = this.props.buttonsMatrix;
    let clickHandler = this.handleClick;

    return (
      <div className="component-button-panel">
         {matrix.map((row, index) => {
              return <div key={index}>
                {row.map((button, index) => {
                    return <Button key={index}
                      name={button.name}
                      displayName={button.displayName || ''}
                      clickHandler={clickHandler}
                      primary={!!button.primary} 
                      wide={!!button.wide}
                    />
                })}
              </div>;
          })}
      </div>
    );
  }
}
