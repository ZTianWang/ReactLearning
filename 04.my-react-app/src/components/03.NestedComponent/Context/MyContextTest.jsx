import React, { useContext, useState } from 'react'
import '../../components.css'
// 引入自定义的context组件
import MyContext from './MyContext';


/*
    Context:
        上下文空间，实现跨级组件传值，不使用props，让子组件直接获取最顶层组件的值
        需使用<MsgContext.Provider>（提供器）及<MsgContext.Comsumer>（接收器）

*/

export default function MyContextTest() {

    const [value, setValue] = useState('Before')

    return (
        <div className='cb'>
            <p className='h'>Context:</p>
            {/* 顶级组件传值：
                使用<Context标签名.Provider>，通过value传值
            */}
            <MyContext.Provider value={{value:value, setValue:setValue}} >
                {/* Context标签内无需使用props传值 */}
                <Father />
            </MyContext.Provider>
        </div>
    )
}

function Father() {
    return (
        <>
            {/* 父组件‘无需’接受顶级组件传递的属性并传递给子组件 */}
            <Child />
            <HookChild/>
        </>
    )
}

function Child() {
    return (
        // 子组件在Context标签内直接接收Context传递的属性
        // 在标签内部的{}中可以直接获取属性
        < MyContext.Consumer >
            {
                ({value,setValue}) => {
                    return (
                        <>
                            <h3>子组件1，value={value}</h3>
                            <button onClick={()=>setValue('Child1')}>set value</button>
                        </>
                    )
                }
            }
        </MyContext.Consumer >
    )
}

// 使用context hook: useContext(Context组件)
function HookChild() {
    const {value,setValue} = useContext(MyContext)
    return (
        <>
            <h3>子组件2(Hooks)：value={value}</h3>
            <button onClick={()=>{setValue('Child2')}}>set value</button>
        </>
    )
}

