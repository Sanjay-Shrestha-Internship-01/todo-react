import React, { Component } from 'react'
import Calendar from './calendar'
// import BodyBottom from './BodyBottom';
export default class Header extends Component {

  // calenderRef = null;

    constructor(props) {
      super(props);
      // learn react state;
      // learn react props;
      // learn react class component
      // learn react way of showing loop of records
      this.state = {
        firstInput: '',
        
       dateInput: '',
        
      }
      this.changeFirstInput = this.changeFirstInput.bind(this);
      
      this.changeDateInput = this.changeDateInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

 
    changeFirstInput(event) {
      // setState is special function to set value on state variable declared on constructor here.
      this.setState({
        firstInput: event.target.value
      });
    }

    

    changeDateInput(date) {
      this.setState({dateInput: date.toDateString()});
    }
    handleSubmit(event) {
      this.props.saveTodo( event, this.state.firstInput, this.state.dateInput)
      this.setState({
        firstInput: '',
        dateInput: '',
      });

    }
   
    render() {
    
        return (
            <div className="todo-header">
            <div className="header-top">
              <div><i className="fas fa-check-square"></i></div>
              <div className="header-title">My Todo-s</div>
            </div>
            <div className="header-form">
              <form action="" onSubmit={this.handleSubmit}>
                <input className="add-bar" id="myInput" type="text" name="FirstInput" value={this.state.firstInput} placeholder="Add new.." onChange={this.changeFirstInput} />
                    <div className= "calendar-icon" > <Calendar  changeDateInput={this.changeDateInput}/><i className="far fa-calendar-alt"></i> </div>
                <button className="add-button" type="submit">Add</button>
               
              </form>
            </div>
          </div>

        )
    }
}
