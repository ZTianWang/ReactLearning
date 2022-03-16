import React,{Component} from "react";
import './Hello.css'

// 类式组件class component
// 定义并暴露Hello组件
export default class Hello extends Component{
    render(){
        return <h1 id="hello" className="blueFont">Hello react</h1>
    }
}