// 定义默认数据并导出函数

const defaultState = {
    msg: 'hello react-redux'
}

// 导出函数
// 返回值为新的state
export default (state = defaultState, action) => {
    // return state;

    // 改变state需先深拷贝，不可直接修改原state！！！
    let newState = JSON.parse(JSON.stringify(state))

    // 推荐使用swith case的方式调用action
    // action.type就是组件在调用方法时需要传入的函数名称，action.value则是调用方法时携带的参数。
    switch (action.type) {
        case "changeMsg":
            newState.msg = action.value;
            break;
        case "changeMsg2":
            newState.msg = action.value;
            break;
        default:
            break;
    }
    return newState
}