import React, { Component } from 'react';
import { render } from 'react-dom';
import Draggable from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Draggable/>
        <p>
          
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
