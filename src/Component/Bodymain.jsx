import React, { Component } from 'react'

export default class Bodymain extends Component {
    render() {
        return (

            <div className="todo-option">
            <div className="filter-select">
              <span>Filter</span>
              <select name="Sanjay" id="">
                <option value="">All</option>
                <option value="">Complete</option>
               
              </select>
            </div>
            <div className="filter-select">
              <span> Sort</span>
              <select name="Sanjay" id="">
                <option value="">Added date</option>
                <option value="">Due date</option>
              </select>
              <i className="fas fa-sort-amount-down-alt down-icon"></i>
            </div>
          </div>


        )
    }
}

