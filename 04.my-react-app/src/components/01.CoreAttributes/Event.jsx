import React, { Component } from 'react'

/*
    事件处理：onXxx = {(e)=>{...}}
        每个事件有一个event参数(e)
        通过event.target可获取发生事件的DOM对象！！！（避免过多使用ref）
*/

export default class Event extends Component {

    state = {
        value:''
    }

    change = (event) => { 
        this.setState({value:event.target.value})
        // console.log(event.target);
    }

    render() {
        return (
            <div className='cb'>
                <p className='h'>event:</p>
                <input type="text" onChange={this.change}/>
                <input type="text" placeholder='显示输入的内容' readOnly value={this.state.value}/>
            </div>
        )
    }
}
