import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import CssBaseline from '@material-ui/core/CssBaseline';
import Counter from './components/Counter';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CssBaseline />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div style={{ marginTop: 10 }}>
            <Counter />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
