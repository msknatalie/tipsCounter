import React, { Component } from "react";
import "./styles.css";
import ButtonCount from "./ButtonCount";
import ButtonDelete from "./ButtonDelete";
import Results from "./Results";

class Form extends Component {
  state = {
    sum: "",
    service: "",
    guests: "",
    tips: "",
    total: ""
    // sumError: "",
    // guestsError: ""
  };

  handleChangeSum = (event) => {
    this.setState({
      sum: event.target.value
    });
  };

  chooseService = (event) => {
    this.setState({
      service: event.target.value
    });
  };

  handleChangeGuests = (event) => {
    this.setState({
      guests: event.target.value
    });
  };

  countTips = (e) => {
    // if (this.state.sum <= 0 || this.state.sum.length > 6) {
    //   this.setState({
    //     sumError: "Сумма счёта должна быть адекватной"
    //   });
    // } else if (this.state.guests <= 0 || this.state.guests.length >= 3) {
    //   //не работает (this.state.guests.includes(","))
    //   this.setState({
    //     guestsError: "Гости должны быть адекватными"
    //   });
    // } else {
    e.preventDefault();
    let totalTips =
      ((this.state.sum / 100) * this.state.service) / this.state.guests;
    let totalSum = this.state.sum / this.state.guests;
    this.setState({
      tips: totalTips,
      total: totalSum
    });
  };

  deleteAll = () => {
    this.setState({
      sum: "",
      service: "",
      guests: "",
      tips: "",
      total: ""
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.countTips}>
          <label className="sum">
            Сумма по счёту
            <br />
            <input
              className="sumInput"
              name="sum"
              type="number"
              min="10"
              value={this.state.sum}
              onChange={this.handleChangeSum}
              required
            />
          </label>
          <p className="error">{this.state.sumError}</p>
          <label className="service">
            Качество обслуживания
            <br />
            <select className="serviceInput" onChange={this.chooseService}>
              <option className="empty" value="">
                {" "}
              </option>
              <option className="bad" value="0">
                Плохое (0%)
              </option>
              <option className="normal" value="5">
                Нормальное (5%)
              </option>
              <option className="good" value="10">
                Хорошее (10%)
              </option>
              <option className="excelent" value="15">
                Отличное (15%)
              </option>
            </select>
          </label>
          <p className="error"></p>
          <label className="guests">
            Количество человек
            <br />
            <input
              className="guestsInput"
              name="guestsInput"
              type="number"
              min="1"
              step="1"
              value={this.state.guests}
              onChange={this.handleChangeGuests}
              required
            />
          </label>
          <p className="error">{this.state.guestsError}</p>
          <ButtonCount />
          <ButtonDelete deleteAllValues={this.deleteAll} />
        </form>
        <Results tipsResult={this.state.tips} totalResult={this.state.total} />
      </>
    );
  }
}

export default Form;
