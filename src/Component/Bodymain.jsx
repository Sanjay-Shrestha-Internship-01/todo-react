import React, { Component } from 'react'

export default class Bodymain extends Component {
    render() {
        return (

            <div class="todo-option">
            <div class="filter-select">
              <span>Filter</span>
              <select name="Sanjay" id="">
                <option value="">All</option>
                <option value="">Complete</option>
                <option value="">Active</option>
                <option value="">Has due date</option>
              </select>
            </div>
            <div class="filter-select">
              <span> Sort</span>
              <select name="Sanjay" id="">
                <option value="">Added date</option>
                <option value="">Due date</option>
              </select>
              <i class="fas fa-sort-amount-down-alt down-icon"></i>
            </div>
          </div>


            )
        }
    }