import { createContext } from 'react'

/*
	Context:
        上下文空间，实现跨级组件传值，不使用props，让子组件直接获取最顶层组件的值
        需使用<MsgContext.Provider value={XXX}>（提供器）及<MsgContext.Comsumer>（接收器）
        通过value属性传值
*/

// 创建Context组件，使用React.createContext(parm)，参数为默认value
const MyContext = createContext('default value')
export default MyContext
