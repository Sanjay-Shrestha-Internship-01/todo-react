import React from "react";
import "./styles/main.scss";
import Header from "./Component/Header";
import Bodymain from "./Component/Bodymain";
import BodyBottom from "./Component/BodyBottom";
import * as todoService from "./services/todoCalls";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      dateInput: "",
      editIndex: -1,
    };
  }

  componentDidMount() {
    this.getTodo();
  }
  //API calls Start
  getTodo = async () => {
    try {
      let data= await todoService.createApiCalls();
      this.setState({ todos: data.data });
    } catch (err) {
      console.log(err);
    }
  };
 
  deleteApi = async (id) => {
    try {
      let data = await todoService.deleteApiCalls(id);
      this.getTodo();
    } catch (err) {
      console.log(err);
    }
  };
  updateApi = async (id, val) => {
    try {
      let data = await todoService.updateApiCalls(id, {title :val});
      this.getTodo();
    } catch (err) {
      console.log(err);
    }
  };

  /// API calls End

  showEditView = (index, todo) => {
    // to show edit view
    this.setState({
      editIndex: index,
      editTodo: { ...todo },
    });
  };

  handleComplete = (event, index, todo) => {
    const todos = [...this.state.todos];
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
  saveTodo= async (event,firstInput, dateInput) => {
    try {
      let data = await  todoService.saveTodoApiCalls({ title: firstInput, date: dateInput });
      event.preventDefault();
      this.setState({ isEdit: true });
      this.getTodo();
    } catch (err) {
      console.log(err);
    }
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
              deleteTodo={this.deleteTodo}
              handleComplete={this.handleComplete}
              handleEditTitle={this.handleEditTitle}
              changeDateInput={this.changeDateInput}
              deleteApi={this.deleteApi}
              updateApi={this.updateApi}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
