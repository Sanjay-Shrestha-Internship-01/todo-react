import logo from './logo.svg';
import React from 'react';

import './styles/main.scss';
import Header from './Component/Header';
import Bodymain from './Component/Bodymain';
import BodyBottom from './Component/BodyBottom';
class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
        todos: [],
        // addTodo: {
        //     title: '', date: ''
        // },


        editTodo: null,
        editIndex: -1
    }
    this.addTodo = this.addTodo.bind(this);
    this.showEditView = this.showEditView.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleEditTitle = this.handleEditTitle.bind(this);
    this.handleEditDate = this.handleEditDate.bind(this);
    this.saveTodo = this.saveTodo.bind(this);

}

addTodo(title, date) {
    const todos = [...this.state.todos];
    todos.push({
        title,
        date,
        isCompleted: false
    });
    this.setState({
        todos,
        // addTodo: {
        //     title: '',
        //     date: ''
        // }
    });
}

showEditView(index, todo) { // to show edit view
    this.setState({
        editIndex: index,
        editTodo: {...todo}
    });
}

updateTodo() {
    const todos = [...this.state.todos];
    const index = this.state.editIndex;
    const editTodo = this.state.editTodo;
    todos.splice(index, 1, editTodo);
    this.setState({
        todos,
        editTodo: null,
        editIndex: -1
    });
}

deleteTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
        todos
    });
}

handleComplete(event, index, todo) {
    const todos = [...this.state.todos];
    // todos[index].isCompleted = event.target.checked;
    const editTodo = {...todo, isCompleted: event.target.checked};
    todos.splice(index, 1, editTodo);
    this.setState({
        todos
    });
}





handleEditTitle(event) {
    const editTodo = {
        ...this.state.editTodo,
        title: event.target.value
    };
    this.setState({
        editTodo: {...editTodo}
    });
}

handleEditDate(event) {
    const editTodo = {
        ...this.state.editTodo,
        date: event.target.value
    };
    this.setState({
        editTodo: {...editTodo}
    });
}
saveTodo(event, firstInput, dateInput) {
    
  console.log("submit called");
  event.preventDefault(); // this line is important
  console.log("value",firstInput, dateInput);
  this.setState({isEdit: true});
  const todos= this.state.todos;
  todos.push({
    title: firstInput,
    
    date: dateInput
  });
  this.setState({
    todos: todos,
    
  });

}
  render () {
    return (
      <div className="App">
        <div className="todo-box">
          <Header 
            todos={this.state.todos}
            saveTodo={this.saveTodo}
          />
        <div className="todo-body">
          <Bodymain />
          <BodyBottom 
            todos={this.state.todos}
            // addTodos={this.addTodo}
            showEditView={this.showEditView}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
            handleComplete={this.handleComplete}
            handleEditTitle={this.handleEditTitle}
            handleEditDate={this.handleEditDate}

          />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
