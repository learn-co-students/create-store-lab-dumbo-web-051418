import React, { Component } from 'react';
import UserInput from './components/UserInput';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={() => {
          console.log(this.props.store.getState().users)
        }}>get store</button>
      </div>
    );
  }
};

export default App;
