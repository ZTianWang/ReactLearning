import React, { useState } from 'react'
import PropTypes from 'prop-types';
import '../components.css'

function Child(props) {
    return (
        <>
            {/* 子组件接受父组件传递的属性：props */}
            <h3>子组件，num：{props.num}</h3>
            {/* 子组件调用传递过来的方法，最后交给定义方法的组件执行 */}
            <button onClick={()=>{props.setNum('Update!')}}>set num</button>
        </>
    )
}

function Father(props) {
    return (
        <>
            {/* 父组件接受顶级组件传递的属性并传递给子组件 */}
            <Child num={props.num} setNum={props.setNum}/>
        </>
    )
}

// 函数式组件中添加props约束
Father.propTypes = {
    setNum : PropTypes.func
}

export default function FatherNChild() {

    const [num,setNum] = useState('Before')

    return (
        <div className='cb'>
            <p className='h'>Father and Child:</p>
            {/* 顶级组件向下一级组件传递属性，包括一个需要参数的方法 */}
            <Father num={num} setNum={setNum} />
        </div>
    )
}
