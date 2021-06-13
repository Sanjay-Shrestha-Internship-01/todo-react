import React, { Component } from "react";
import Calendar from "./calendar";
export default class BodyBottom extends Component {
  render() {
    const todos = this.props.todos || [];
    const editIndex = this.props.editIndex;
    const editTodo = this.props.editTodo;
    const showEditView = this.props.showEditView;
    const handleEditTitle = this.props.handleEditTitle;

    return (
      <>
        {todos.map((item, index) => {
          if (index === editIndex && editTodo) {
            return (
              <>
                <form
                  onSubmit={() =>
                    this.props.updateApi(item.id, `${editTodo.title}`)
                  }
                >
                  <div className="todo-checklist">
                    <div className="checklist-row">
                      <div className="checklist-left">
                        <input
                          type="checkbox"
                          checked={todos.isCompleted}
                          onChange={(event) =>
                            this.props.handleComplete(event, index, item)
                          }
                        />
                        <span>
                          <input
                            className="edit-add-bar"
                            id="myInput"
                            type="text"
                            name="edittitle"
                            value={editTodo.title}
                            placeholder="Add new.."
                            onChange={handleEditTitle}
                          />
                        </span>
                      </div>
                      <div className="checklist-right">
                        <div className="checklist-icons">
                          <div
                            className="first-icon"
                            onClick={() => this.props.deleteApi(item.id)}
                          >
                            <i className="far fa-trash-alt second-icon"></i>
                            <div className="icon-dropdown">
                              <span className="icon-hover-text">
                                Delete todo
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="checklist-icons">
                          <div className="first-icon">
                            <i className="fas fa-info-circle third-icon"></i>
                            <span className="third-text"> {item.date}</span>
                            <div className="icon-dropdown">
                              <span className="icon-hover-text">
                                Created Date
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="add-button" type="submit">
                    Add
                  </button>
                </form>
              </>
            );
          }

          return (
            <>
              <form>
                <div className="todo-checklist">
                  <div className="checklist-row">
                    <div className="checklist-left">
                      <input
                        type="checkbox"
                        checked={todos.isCompleted}
                        onChange={(event) =>
                          this.props.handleComplete(event, index, item)
                        }
                      />
                      <label>{item.title}</label>
                    </div>
                    <div className="checklist-right">
                      <div className="checklist-icons">
                        <div
                          className="first-icon"
                          onClick={() => showEditView(index, item)}
                        >
                          <i className="fas fa-pencil-alt"></i>
                          <div className="icon-dropdown">
                            <span className="icon-hover-text">Edit todo</span>
                          </div>
                        </div>
                        <div
                          className="first-icon"
                          onClick={() => this.props.deleteApi(item.id)}
                        >
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
                            <span className="icon-hover-text">
                              Created Date
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </>
          );
        })}
      </>
    );
  }
}
