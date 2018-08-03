import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserInput extends Component {
  state = {
    username: '',
    hometown: '',
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addUser(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type='text' name='username' value={this.state.username} onChange={(e) => this.handleInputChange(e)} />
          <input type='text' name='hometown' value={this.state.hometown} onChange={(e) => this.handleInputChange(e)} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch({
        type: 'ADD_USER',
        user
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(UserInput);
