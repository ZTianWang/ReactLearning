import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import MyRouter from './router'

// 更改入口文件为Router组件
ReactDOM.render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
