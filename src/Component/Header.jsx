import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="todo-header">
            <div className="header-top">
              <div><i className="fas fa-check-square"></i></div>
              <div className="header-title">My Todo-s</div>
            </div>
            <div className="header-form">
              <form action="">
                <input className="add-bar" type="text" placeholder="Add new.." />
                <button className="add-button" type="submit">Add</button>
              </form>
            </div>
          </div>
        )
    }
}
