import React from 'react';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../store';
import Main from '../Main';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
