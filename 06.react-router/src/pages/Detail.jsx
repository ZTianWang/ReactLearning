import React from 'react'
// 引入Params hook
import { useParams } from 'react-router-dom'

export default function Detail() {

  // useParams()可获得通过url子路由的方式携带的参数
  const params = useParams()
  const { id, title } = params

  return (
    <>
      <h2>Detail Page </h2>
      <h3>id: {id} | title: {title}</h3>
    </>
  )
}
