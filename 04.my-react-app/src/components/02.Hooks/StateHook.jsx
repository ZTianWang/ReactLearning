import {useState } from "react";
import '../components.css'

/* 函数式组件:function component
    1.函数式组件没有生命周期
    2.函数式组件没有this
    3.函数式组件没有state

    Hooks:(钩子)
*/
// 定义function component
export default function StateHooks() {

    const originalMsg = 'hello react'
    const originalNum = 0
    // Hook只能在组件函数中的最顶层！！！
    // useState: 传入一个初始值，返回初始值和set方法
    // 调用set方法：直接传入要修改的值：setXxx(para)，页面自动重新渲染)
    const [num,setNum] = useState(originalNum)
    const [msg,setMsg] = useState(originalMsg)

    function change() {
        setNum(num+1)
        setMsg(originalMsg+(num+1))
    }
    return (
        <div className="cb">
            <p className="h">StateHooks:</p>
            <h2>{'第'+ num + '次修改：' + msg}</h2>
            <button onClick={change}>change</button>
        </div>
    )
}

// ES6:
// const Hook =()=>{
//     return <h2 id="hook" className="redFont">Welcome {name} </h2>
// }
