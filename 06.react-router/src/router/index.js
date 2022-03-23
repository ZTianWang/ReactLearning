// 单页面应用(SPA)的路由入口
// 引入核心组件：BrowserRouter（History模式） HashRouter（Hash模式）
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 引入所有页面组件
import App from '../App'
import Home from '../pages/Home'
import List from '../pages/List'
import Detail from '../pages/Detail'
import Error from '../pages/Error'

// const MyRouter =() => { 
//     return (
//         <BrowserRouter>
//         </BrowserRouter>
//     )
//  }

// 定义一个路由：
const MyRouter = () => (
    // 最外层组件BrowserRouter：
    <BrowserRouter>
        {/* 所有路由全部嵌套在Routes中 */}
        <Routes>
            {/* 路由的根路径为App组件 */}
            <Route path='/' element={<App />}>
                {/* 路由的所有子路径包裹在根路径中 */}
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/list' element={<List/>}></Route>
                {/* 携带参数1：使用url子路由的传参方式（/detail/123/title）：
                        路由组件使用 /:pramName
                        此时访问路径必须携带参数！
                */}
                <Route path='/detail/:id/:title' element={<Detail/>}></Route>
            </Route>
            {/* 404匹配：路径使用通配符* */}
            <Route path='*' element={<Error/>}></Route>
        </Routes>
    </BrowserRouter>
)

export default MyRouter