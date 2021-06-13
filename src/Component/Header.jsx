import React, { Component } from "react";
import Calendar from "./calendar";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstInput: "",
    };
  }

  changeFirstInput = (event) => {
    // setState is special function to set value on state variable declared on constructor here.
    this.setState({
      firstInput: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.props.saveTodo(event, this.state.firstInput, this.props.dateInput);
    this.setState({
      firstInput: "",
    });
  };

  render() {
    return (
      <div className="todo-header">
        <div className="header-top">
          <div>
            <i className="fas fa-check-square"></i>
          </div>
          <div className="header-title">My Todo-s</div>
        </div>
        <div className="header-form">
          <form action="" onSubmit={this.handleSubmit}>
            <input
              className="add-bar"
              id="input"
              type="text"
              name="FirstInput"
              value={this.state.firstInput}
              placeholder="Add new.."
              onChange={this.changeFirstInput}
            />
            <div className="calendar-icon">
              {" "}
              <Calendar changeDateInput={this.props.changeDateInput} />
              <i className="far fa-calendar-alt"></i>{" "}
            </div>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}
