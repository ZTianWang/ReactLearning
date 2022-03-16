import React, { Component } from 'react'

export default class Refs extends Component {

    state = {num1:0,num2:0,result:0}

    /* 
        React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的
        节点存在于容器的current属性中
    */
    // RefInput1 = React.createRef()
    RefInput2 = React.createRef()

    square = () => {
        const { RefInput1, RefInput2 } = this
        // 获得回调式的值.value
        let num1 = RefInput1.value*1
        // 获得createRef式的值，使用.current.value
        // console.log(RefInput2.current)
        let num2 = RefInput2.current.value*1
        let result = num1*num2
        this.setState({num1:num1,num2:num2,result:result})
    }

    render() {
        let {num1,num2,result} = this.state
        return (
            <div className='cb'>
                <p className='h'>Refs：</p>

                <form action=""></form>
                {/* 以回调函数的方式添加ref */}
                {/* <input ref={node => { this.RefInput1 = node; console.log(node)}} type="text" placeholder='Input' /> */}
                <input ref={node => { this.RefInput1 = node}} type="text" placeholder='Input' />

                {/* 以createRef的方式添加Ref */}
                <input ref={this.RefInput2} type="text" placeholder='Output' />

                <button onClick={()=>{console.log(this); this.square()}}>计算乘积</button>
                <span>{num1}*{num2}={result}</span>
                <br /><br />
            </div>
        )
    }
}
