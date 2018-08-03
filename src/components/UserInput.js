import React, { Component } from 'react';

import {connect} from 'react-redux'

class UserInput extends Component {
  state = {
    username: "",
    hometown: ""
  }

  changeHandlerUsername = (e) => {
    this.setState({username: e.target.value})
  }

  changeHandlerHometown = (e) => {
    this.setState({hometown: e.target.value})
  }

  submitHandler = () => {
    this.props.store.dispatch({type: 'ADD_USER', user: this.state})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="username" id="username" onChange={this.changeHandlerUsername}/>
          <input type="text" name="hometown" id="hometown" onChange={this.changeHandlerHometown}/>
        </form>
      </div>
    );
  }
};

export default UserInput
