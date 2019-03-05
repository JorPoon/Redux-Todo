import React, { Component } from 'react';
import './App.css';

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <div className="App">
          <Todos />
      </div>
    );
  }
}

export default App;
