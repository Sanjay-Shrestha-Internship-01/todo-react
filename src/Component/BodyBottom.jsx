
import React, { Component } from 'react'

export default class BodyBottom extends Component {
  

  render() {
    const todos = this.props.todos || [];
    console.log(todos);
    return (
      <>
        {todos.map((item, index) => (
          <form>
          <div className="todo-checklist">
          <div className="checklist-row">
            <div className="checklist-left">
              <input type="checkbox" />
              <label>{item.title}</label>
            </div>
            <div className="checklist-right">
              <div className="checklist-icons">
                <div className="first-icon" onClick={()=>this.props.editTodo(item, index)}>
                  <i className="fas fa-pencil-alt"></i>
                  <div className="icon-dropdown">
                    <span className="icon-hover-text" >Edit todo</span>
                  </div>
                </div>
                <div className="first-icon" onClick= {()=>this.props.deleteTodo(index)}>
                  <i className="far fa-trash-alt second-icon"></i>
                  <div className="icon-dropdown">
                    <span className="icon-hover-text">Delete todo</span>
                  </div>
                </div>
              </div>

              <div className="checklist-icons">
                <div className="first-icon">
                  <i className="fas fa-info-circle third-icon"></i>
                  <span className="third-text"> {item.date}</span>
                  <div className="icon-dropdown">
                    <span className="icon-hover-text">Created Date</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        </form>
        ))} 
      </>
    )
  }
}