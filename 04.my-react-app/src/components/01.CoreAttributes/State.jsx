import React, { Component } from 'react'
import '../components.css'


export default class State extends Component {

    /*
        1.组件私有属性，内部属性受控于当前属性,只能在构造函数中赋值
        2.state只能被赋值为一个obj
        3.更新state可以重新渲染
        4.state内部含有this：
            1)需通过bind(this)强制绑定
            2)使用箭头函数
        5.更新state内的数组需先使用“深拷贝！！！”将数组赋值给另一个数组X，并操作X后讲X的值赋予state中的数组
    */
    state = {
        num: 1
    }


    render() {
        return (
            <div className='cb'>
                <p className='h'>state:</p>
                <h2>number: {this.state.num}</h2>
                {/* 代码少时：写在内部 */}
                <button onClick={()=> this.setState({num: this.state.num+1})}>累加1</button>
                
                {/* 代码多时：主函数定义在外部 */}
                {/* 写法1：建议，直接在括号里传参 */}
                <button onClick={()=> this.addNum(2)}>累加2</button>
                {/* 写法2：在bind(this后加,传参) */}
                <button onClick={this.addNum.bind(this,3)}>累加3</button>
                {/* 写法三：使用不带参数的函数 */}
                <button onClick={this.addNum1}>不带参数累加</button>
                {/* 写法四：调用不带this的函数 */}
                <button onClick={this.event}>调用不带this的函数</button>
            </div>
        )
    }

    // setState({key:value})
    addNum(num){
        this.setState({num: this.state.num+num})
    }
    event(){
        alert('无需访问this的函数')
    }

    addNum1 = ()=>{
        this.setState({num: this.state.num+1})
    }
}
