import React from "react";
import "./styles/main.scss";
import Header from "./Component/Header";
import Bodymain from "./Component/Bodymain";
import BodyBottom from "./Component/BodyBottom";
import axios from 'axios'

const api = axios.create({
  baseURL : `http://localhost:3000`
})
class App extends React.Component {

  constructor(props) {
    super(props);
    
    

    this.state = {
      todos: [],
     
      dateInput: "",
      editIndex: -1,
    };
  }
  
  componentDidMount(){
    this.getTodo();
  }
  //API calls Start
getTodo = async ()=>{
  let data = await api.get('/todos').then(({data}) =>
    data);
  
  this.setState({ todos : data })
  console.log(data)
}
  
  deleteApi = async(id) =>{
    
    let data = await api.delete(`/todos/${id}`)
    this.getTodo();
  }
  updateApi = async(id, val) =>{
    
    let data = await api.patch(`/todos/${id}`,{title: val})
    this.getTodo();
  }

/// API calls end

  // addTodo = (title, date) => {
  //   const todos = [...this.state.todos];
  //   todos.push({
      
      
  //     title,
  //     date,
  //     isCompleted: false,
  //   });
  //   this.setState({
  //     todos,
      
  //   });
  // };
 
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

  // handleEditDate = (event) => {
  //   const editTodo = {
  //     ...this.state.editTodo,
  //     date: event.target.value,
  //   };
  //   this.setState({
  //     editTodo: { ...editTodo },
  //   });
  // };
  saveTodo = (event, firstInput, dateInput) => {
   
    console.log("submit called");
    event.preventDefault(); // @note: This line is important. The preventDefault() method stops the default action of a selected element from happening by a user.
    console.log("value", firstInput, dateInput);
    this.setState({ isEdit: true });
    const todos = this.state.todos;
    // todos.push({
    //   title: firstInput,
    //   date: dateInput,
    // });
  api.post('/todos',{ title: firstInput,
        date: dateInput, })
      
      this.getTodo();
    
    
    // this.setState({
    //   todos: todos,
    // });
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

