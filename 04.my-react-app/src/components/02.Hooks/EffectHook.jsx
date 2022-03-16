import React, { useEffect, useState } from 'react'
import '../components.css'

export default function EffectHook() {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)
    const [count, setCount] = useState(0)

    /* 
        副作用：useEffect(()=>{...},[...])
        参数为一个回调函数：模拟mounted，一般在这里写数据请求
    */
    // useEffect(
    //     () => {
    //         console.log('EffectHook加载完成')
    //     })

    /* 
        参数为一个函数和一个数组：
            监测数据更新
            数组内为被监测的数据不写第二个参数为监测所有数据
            若有多个监测调用多个useEffect
    */
    useEffect(()=>{
        // console.log('有数据更新了')
    },[num1,num2])

    /*
        参数为一个返回一个函数的回调函数：useEffect( ()=>{ return ()=>{} } )
            模拟unmount
            在这个阶段处理脏数据或垃圾回收
            函数写在最内层的函数中
    */
    useEffect(()=>{
        return ()=>{
            // console.log('unmount')
            setNum1(0)
            setNum2(0)
            setNum3(0)
        }
    },[count])

    return (
        <div className='cb'>
            <p className='h'>Effect Hooks:</p>
            <h3>数据1第{num1}次修改</h3>
            <h3>数据2第{num2}次修改</h3>
            <h3>数据3第{num3}次修改</h3>
            <h3>清零了{count}次</h3>
            <button onClick={() => { setNum1(num1 + 1) }}>数据1</button>
            <button onClick={() => { setNum2(num2 + 1) }}>数据2</button>
            <button onClick={() => { setNum3(num3 + 1) }}>数据3</button>
            <button onClick={()=>{setCount(count+1)}}>清零</button>
        </div>
    )
}
