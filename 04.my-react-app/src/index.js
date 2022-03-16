//引入react核心库
import React from 'react';
//引入react DOM
import ReactDOM from 'react-dom';

//引入App组件
// import AppTest from './AppTest';
import Hello from './components/Head/Hello/Hello.jsx';
import Welcome from './components/Head/Welcome/Welcome.jsx';
import App1 from './App1.jsx';
import App2 from './App2.jsx';
import App3 from './App3.jsx';
import LifeCycle from './components/01.CoreAttributes/LifeCycle.jsx';

import './components/components.css'

// 渲染APP到页面
ReactDOM.render(
  <React.StrictMode>
    <Hello/>
    <Welcome/>
  </React.StrictMode>,
  document.getElementById('head')
);

// 核心属性
ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById('coreAttr')
);

// 生命周期
ReactDOM.render(
  <React.StrictMode>
    <LifeCycle/>
  </React.StrictMode>,
  document.getElementById('life')
);

// Hooks
ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('hooks')
)

// 父传子 子传父
ReactDOM.render(
  <React.StrictMode>
    <App3 />
  </React.StrictMode>,
  document.getElementById('nested')
)

