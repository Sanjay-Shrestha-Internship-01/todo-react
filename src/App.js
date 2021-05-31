import logo from "./logo.svg";
import React from "react";

import "./styles/main.scss";
import Header from "./Component/Header";
import Bodymain from "./Component/Bodymain";
import BodyBottom from "./Component/BodyBottom";

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      dateInput: "",
      editIndex: -1,
    };
  }

  addTodo = (title, date) => {
    const todos = [...this.state.todos];
    todos.push({
      title,
      date,
      isCompleted: false,
    });
    this.setState({
      todos,
      // addTodo: {
      //     title: '',
      //     date: ''
      // }
    });
  };

  showEditView = (index, todo) => {
    // to show edit view
    this.setState({
      editIndex: index,
      editTodo: { ...todo },
    });
  };

  updateTodo = (event) => {
    event.preventDefault();
    const todos = [...this.state.todos];
    const index = this.state.editIndex;
    const editTodo = this.state.editTodo;
    todos.splice(index, 1, editTodo);
    this.setState({
      todos,
      editTodo: null,
      editIndex: -1,
    });
  };

  deleteTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos,
    });
  };

  handleComplete = (event, index, todo) => {
    const todos = [...this.state.todos];
    // todos[index].isCompleted = event.target.checked;
    const editTodo = { ...todo, isCompleted: event.target.checked };
    todos.splice(index, 1, editTodo);
    this.setState({
      todos,
    });
  };

  handleEditTitle = (event) => {
    const editTodo = {
      ...this.state.editTodo,
      title: event.target.value,
    };
    this.setState({
      editTodo: { ...editTodo },
    });
  };

  handleEditDate = (event) => {
    const editTodo = {
      ...this.state.editTodo,
      date: event.target.value,
    };
    this.setState({
      editTodo: { ...editTodo },
    });
  };
  saveTodo = (event, firstInput, dateInput) => {
    console.log("submit called");
    event.preventDefault(); // this line is important
    console.log("value", firstInput, dateInput);
    this.setState({ isEdit: true });
    const todos = this.state.todos;
    todos.push({
      title: firstInput,

      date: dateInput,
    });
    this.setState({
      todos: todos,
    });
  };
  changeDateInput = (date) => {
    this.setState({ dateInput: date.toDateString() });
  };
  render() {
    return (
      <div className="App">
        <div className="todo-box">
          <Header
            todos={this.state.todos}
            saveTodo={this.saveTodo}
            dateInput={this.state.dateInput}
            changeDateInput={this.changeDateInput}
          />
          <div className="todo-body">
            <Bodymain />
            <BodyBottom
              todos={this.state.todos}
              editTodo={this.state.editTodo}
              editIndex={this.state.editIndex}
              showEditView={this.showEditView}
              updateTodo={this.updateTodo}
              deleteTodo={this.deleteTodo}
              handleComplete={this.handleComplete}
              handleEditTitle={this.handleEditTitle}
              handleEditDate={this.handleEditDate}
              changeDateInput={this.changeDateInput}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

