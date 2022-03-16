import React, { Component, } from 'react'
import ReactDOM from 'react-dom'
import '../components.css'


/*
    生命周期：只在类式组件
        1.构造器 constructor
        2.即将挂载 componentWillMount ：用于初始化的事务，如开启定时器、发送网络请求、订阅消息
        3.渲染 render
        4.挂载完毕 componentDidMount
        5.（若有setState）即将更新 componentWillUpdate，再渲染
        7.即将卸载 componentWillUnmount ：用于收尾，如关闭定时器、取消订阅消息
        6.卸载组件 可由unmountComponentAtNode()触发
*/
export default class LifeCycle extends Component {

    // 1.构造器
    constructor(props) {
        super(props)
        // console.log('constructor')
        this.state = { date: new Date() }
    }

    // 2.挂载前
    componentWillMount() {
        // console.log('componentWillMount')


    }

    // 3.挂载完毕
    componentDidMount() {
        // console.log('componentDidMount')

        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)

    }

    // 即将更新
    componentWillUpdate() {
        // console.log('componentWillUpdate')
    }

    // 即将卸载
    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.timer)
    }

    // 卸载组件
    unmount = () => {
        ReactDOM.unmountComponentAtNode(document.querySelector('#life'))
    }

    render() {
        return (
            <div className='cb'>
                <p className='h'>Life Cycle:</p>
                <h2>{this.state.date.toString()}</h2>
                <button onClick={this.unmount}>卸载组件，关闭计时器</button>
            </div>
        )
    }
}
