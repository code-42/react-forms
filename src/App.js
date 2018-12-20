// source https://github.com/benawad/basic-react-form/blob/master/src/App.js
// youtube https://www.youtube.com/watch?v=qH4pJISKeoI

import React, { Component } from 'react';
import './App.css';
import Form from "./Form";

class App extends Component {
  state = {
    fields: {}
  };

  // displays contents of fields when form submitted
  onSubmit = fields => {
    this.setState({fields});
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
