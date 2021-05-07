import React, { Component } from "react";
import "./styles.css";

class ButtonDelete extends Component {
  render() {
    return (
      <button id="delete" type="button" onClick={this.props.deleteAllValues}>
        Сбросить
      </button>
    );
  }
}

export default ButtonDelete;
