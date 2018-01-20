import React, { Component } from 'react';
import Header from './components/Header.js';
import DragDropContainer from './containers/DragDropContainer.js';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DragDropContainer />
      </div>
    );
  }
}

export default App;
