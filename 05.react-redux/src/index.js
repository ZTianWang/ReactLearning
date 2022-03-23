import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 引入store和Provider
import { store } from './store' // 默认为index.js
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    {/* 顶级组件外层为Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

