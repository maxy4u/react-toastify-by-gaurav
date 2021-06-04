import React, { Component } from 'react';
import { render } from 'react-dom';
import ToastCards from './ToastCards';
import { withToastProvider } from './Toast';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Toast Example'
    };
  }

  render() {
    return (
      <div>
        <ToastCards name={this.state.name} />
        <p>
          Start editing to see some magic happen)
        </p>
      </div>
    );
  }
}

const AppWithToastProvider = withToastProvider(App);

render(<AppWithToastProvider />, document.getElementById('root'));
