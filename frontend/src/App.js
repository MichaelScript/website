import React, { Component } from 'react';
import './App.css';
import './css/common.css';
import { Provider } from 'react-redux';
import {store} from './store/index.js';
import AppContainer from './components/AppContainer';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AppContainer></AppContainer>
        </div>
      </Provider>
    );
  }
}

export default App;
