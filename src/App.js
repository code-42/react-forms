// source https://github.com/benawad/basic-react-form/blob/master/src/App.js
// youtube https://www.youtube.com/watch?v=qH4pJISKeoI

import React, { Component } from 'react';
import './App.css';
import Form from "./Form";

class App extends Component {
  state = {
    fields: {}
  };

  onSubmit = fields => {
    this.setState({fields});
    console.log("App component got: ", fields);
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)} />
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>
      </div>
    );
  }
}

export default App;
