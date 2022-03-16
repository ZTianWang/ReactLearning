import React from "react";
import './Welcome.css'

/* 函数式组件:function component
    1.函数式组件没有生命周期
    2.函数式组件没有this
    3.函数式组件没有state

    Hooks:
*/
const name = 'Leon'
// 定义并组件
// function Welcome() {
//     return (
//         <>
//             <h2 id="welcome" className="redFont">Welcome {name} </h2>
//         </>
//     )
// }

// ES6:
const Welcome =()=>{
    return <h2 id="welcome" className="redFont">Welcome {name} </h2>
}

// 暴露函数式组件
export default Welcome