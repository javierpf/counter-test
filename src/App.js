import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from './logo.svg';
import './App.css';
import store from './store';
import EditDataTable from './components/EditDataTable';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <CssBaseline />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div style={{ margin: 10 }}>
        <EditDataTable />
      </div>
    </div>
  </Provider>
);

export default App;
