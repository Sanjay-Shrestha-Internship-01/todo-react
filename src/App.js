import React from "react";
import "./styles/main.scss";
import Header from "./Component/Header";
import Bodymain from "./Component/Bodymain";
import BodyBottom from "./Component/BodyBottom";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3000`,
});
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
      let data = await api.get("/todos").then(({ data }) => data);
      this.setState({ todos: data });
    } catch (err) {
      console.log(err);
    }
  };

  deleteApi = async (id) => {
    try {
      let data = await api.delete(`/todos/${id}`);
      this.getTodo();
    } catch (err) {
      console.log(err);
    }
  };
  updateApi = async (id, val) => {
    try{
      let data = await api.patch(`/todos/${id}`, { title: val });
    this.getTodo();

    }catch(err){
      console.log(err)
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

  saveTodo = (event, firstInput, dateInput) => {
    console.log("submit called");
    event.preventDefault(); // @note: This line is important. The preventDefault() method stops the default action of a selected element from happening by a user.
    console.log("value", firstInput, dateInput);
    this.setState({ isEdit: true });
    const todos = this.state.todos;
    api.post("/todos", { title: firstInput, date: dateInput });

    this.getTodo();
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
