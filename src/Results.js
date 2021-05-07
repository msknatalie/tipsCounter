import React, { Component } from "react";
import "./styles.css";

class Results extends Component {
  render() {
    return (
      <>
        <p className="resultOne">
          Чаевые: <span className="tips">{this.props.tipsResult}</span>
          <span className="rub"> ₽</span>
          <span className="each"> (с каждого)</span>
        </p>
        <p className="resultTwo">
          Всего: <span className="total">{this.props.totalResult}</span>
          <span className="rub"> ₽</span>
          <span className="each"> (с каждого)</span>
        </p>
      </>
    );
  }
}

export default Results;
