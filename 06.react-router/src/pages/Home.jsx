import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {

  // 通过useLocation().state获取
  const location = useLocation()

  let id = null
  let name = null
  if (location.state != null) {
    id = location.state.id
    name = location.state.name
    // console.log(id, name);
  }

  return (
    <>
      <h2>Home Page </h2>
      {
        id != null && name != null ? <h3>Id: {id} | Name: {name}</h3> : <h3>No Param</h3>
      }
    </>
  )
}
