import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: "",
    hometown: "",
  }

  handleNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleHometownChange = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <label htmlFor="username">Username</label><br></br>
          <input type="text" id="username" onChange={this.handleNameChange}></input><br></br>
          <label htmlFor="hometown">hometown</label><br></br>
          <input type="text" id="hometown" onChange={this.handleHometownChange}></input><br></br>
          <input type="submit" value="Add User"></input>
        </form>
      </div>
    );
  }
};

export default UserInput
