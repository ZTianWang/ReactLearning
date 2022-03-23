import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function List() {

  // 使用useSearchParams()获取以?形式携带的参数
  const [params] = useSearchParams()

  // 通过getAll('参数名')获取参数的值：返回值为一个数组！！！
  const id = params.getAll('id')[0]
  const title = params.getAll('title')[0]

  return (
    <>
      <h2>List Page</h2>
      {
        id && title ? <h3>id: {id} | title: {title}</h3> : <h3>No Param</h3>
      }
    </>
  )
}
