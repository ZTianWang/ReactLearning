// 创建外壳组件
// 类组件必须引入react包中的default export的React
import React from "react";
// 引入其他组件
import State from "./components/01.CoreAttributes/State";
import Props from "./components/01.CoreAttributes/Props";
import Refs from "./components/01.CoreAttributes/Refs";

import './components/components.css'
import Event from "./components/01.CoreAttributes/Event";

// 创建类组件并暴露组件
export default class App extends React.Component{
  // 组件渲染函数，必须有
  render(){
    const props = {name:'Leon', age:20, gender:'male'}
    // js中的htnml用()包裹
    return (
      // 用空标签做根元素
      <>
        <h3>1.Core Attributes:</h3>
        <State/>
        <Props {...props}/>{/* 对象展开运算符：只能在标签内部使用 */}
        <Refs/>
        <Event/>
      </>
    )
  }
}

// 暴露App组件
// export default App

