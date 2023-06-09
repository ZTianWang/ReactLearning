import React, { useEffect } from 'react'

// 在最上层容器组件中使用Outlet组件展示子路由
// 使用Link代替<a>做跳转
// useLocation: 路由hook, 可以获取地址栏路径
// useNavigate: 路由hook, 可实现路由跳转
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'

function App() {

  // 地址栏路径: useLocation().pathname
  let { pathname } = useLocation()
  // console.log(pathname);

  // useNavigate()返回一个函数，函数参数（第一个参数）为路径
  const navigate = useNavigate()

  // 通过Location和Navigate hooks 可用于将入口页面定向到首页组件
  useEffect(() => {
    if (pathname === '/') {
      navigate('/home ')
    }
  }, [])

  /*
    通过state携带参数：
      方便携带数据量较大的参数
      通过Navigate hook 跳转实现：useNavigate()()
      在调用useNavigate()后返回的函数中定义携带的参数对象，第二个参数为需携带的参数对象！！！
      只能将参数定义在state中！
      通过useLocation().state获取携带的参数
  */
  const toHome = () => {
    navigate('/home',{
      state: {id:123, name: 'Leon'}
    })
  }

  return (
    <>
      <h1>Router App</h1>
      <ul>
        {/* <li><a href=''>home</a></li> */}
        {/* Link中使用to属性代替a中的href */}
        <li><Link to='/home'>home</Link></li>
        <li><Link to='/list'>list</Link></li>
        {/* 以url子路由的形式携带参数：
              需先配置入口文件（index.js）的Router组件
              此时访问路径必须携带参数！！！
              携带的参数数目和方式必须与入口文件Router组件定义的一直
        */}
        <li><Link to='/detail/01/apple'>detail</Link></li>
        {/* 以?的形式携带参数
              无需配置入口文件的Router组件
              访问路径可以不携带参数
              携带多个参数使用 &
        */}
        <li><Link to='/list?id=02&title=Microsoft'>list with params</Link></li>
      </ul>
      {/* 调用useNavigate hook，传入参数为路径 */}
      <button onClick={() => navigate('/home')}>Go To Home</button>
      <button onClick={toHome}>Go To Home with params</button>
      <hr />
	  
	  {/* 通过Outlet组件展示子路由（以子组件的形式） */}
      <Outlet />
    </>
  );
}

export default App;
