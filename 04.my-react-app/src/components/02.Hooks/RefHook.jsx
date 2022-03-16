import React, { useRef, useState } from 'react'

/*
    受控组件与非受控组件：（含表单元素的组件）
        受控组件：元素值受state/useState控制，其值可直接通过state获取
        非受控组件：表单元素的值不收state控制，只能通过ref/useRef获取
*/

export default function RefHook() {

    // 创建ref hook : useRef(parm) parm为默认元素，可为null
    // 可创建多个ref
    const element = useRef();

    const [value, setValue] = useState('')

    const showValue = () => {
        setValue(element.current.value)
    }

    return (
        <div className='cb'>
            <p className='h'>Ref hook:</p>
            {/* 为元素添加ref: */}
            <input ref={element} type="text" />
            <button onClick={showValue}>get value</button>
            <input type="text" placeholder='获取输入的值' readOnly value={value} />
        </div>
    )
}
