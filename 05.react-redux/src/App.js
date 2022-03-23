// 在需要调用数据的组件中使用连接器
import React from "react";
import { connect } from 'react-redux'

function App(props) {
  return (
    <>
      <h2>Msg: {props.msg}</h2>
      <button onClick={props.changeMsg}>修改Msg</button>
      <button onClick={props.changeMsg2}>修改Msg2</button>
    </>
  );
}

// state的映射
const mapStateToProps = (state) => {
  return {
    msg: state.msg
  }
}

// action的映射：事件派发映射
const mapDispatchToProps = (dispatch) => { 
  return {
    // 第一个事件
    changeMsg(){
      let action = {type: 'changeMsg', value: 'Changed!'}
      dispatch(action)
    },
    // 第二个事件
    changeMsg2(){
      let action = {type: 'changeMsg2', value: 'Changed2!'}
      dispatch(action)
    }
  }
 }

// 将组件通过connect()()高阶函数暴露
// connect(state映射, dispatch映射)(当前组件类)
export default connect(mapStateToProps,mapDispatchToProps)(App);
