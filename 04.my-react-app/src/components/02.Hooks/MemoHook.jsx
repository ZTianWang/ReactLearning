import React, { memo, useCallback, useState, useMemo } from 'react'

/*
    当父组件更新，子组件亦被重新渲染，为减少子组件不必要的渲染，提高性能
        1.使用memo(Comp)使子组件不被渲染,参数为子组件常量
        2.memo()的缺陷：
            单独使用memo只能用于纯静态的子组件（子组件不做数据处理）
        3.使用useCallback(fn,[])：fn为要回调的函数，第二个参数为监测更新的依赖项
        4.使用useMemo(()=>{return fn},[]):此方式与callback相同，但第一个参数为返回一个函数的函数（高阶函数）
*/
export default function MemoHook() {

    const [num, setNum] = useState(0)

    /*
        若使用setNum(num+1) 表示使用新值覆盖初始值,此时，调用一次useCallback后监测不到更新
        若使用setNum((num)=>{return num+1}) setNum的参数是个回调函数，不断用新值覆盖旧值
    */
    // const update = useCallback(()=>setNum(num+1),[num])//只能更新一次
    const update1 = useCallback(() => setNum(num => num + 1),[])

    /*
        使用useMemo的第一个参数为高阶函数
        同样需要让setState的参数用新值不断覆盖旧值
    */
    const update2 = useMemo(
        () => {
            return () => setNum(num => num + 1)
        }, [])

    return (
        <div className='cb'>
            <p className='h'>memo Hook:</p>
            <h3>父组件更新了{num}次</h3>
            {/* <button onClick={() => { setNum(num + 1) }}>Update</button> */}
            {/* <MemoChild num={num} update={update} /> */}
            <MemoChild setNum1={update1} setNum2={update2} />
        </div>
    )
}

const Child = (props) => {
    console.log('Subcomponent updates!');
    const { setNum1, setNum2 } = props
    return (
        <>
            {/* <h3>Sub Component</h3> */}
            <h3>Sub Component:</h3>
            <button onClick={setNum1}>Update Father by useCallback</button>
            <button onClick={setNum2}>Update Father by useMemo</button>
        </>
    )
}

const MemoChild = memo(Child)