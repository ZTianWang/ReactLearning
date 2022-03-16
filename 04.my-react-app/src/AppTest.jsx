// 创建外壳组件
// 类组件必须引入react包中的default export的React
import React from "react";
// 引入其他组件
import Welcome from "./components/Welcome/Welcome";


const hello = 'Hello React'
const flag = true
let arr = ['a','b','c']

// 创建类组件并暴露组件
export default class AppTest extends React.Component{
  // 组件渲染函数，必须有
  render(){
    // js中的htnml用()包裹
    return (
      // 用空标签做根元素
      <>
        {/* 三元运算 */}
        <h1 style={{color: flag ? 'blue' : 'pink'}}>{hello}</h1>
        <Welcome />
        <br />
        {/* lable在js中的for为htmlFor */}
        <label htmlFor="username">username:</label>
        <input type="text" id="username" />
        <br />

        <ul>
          {/* react中的循环只能用.map((item,index)=>{return ...})
              index用于给key属性赋值 */}
            {arr.map((item,index)=>{
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </>
    )
  }
}

// 暴露App组件
// export default App

