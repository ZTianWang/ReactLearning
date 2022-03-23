import React from 'react'
import ErrorImg from '../assets/404.jpeg'

// 404匹配：
export default function Error() {
  return (
    <div>
        <img style={{width:'100%', display:'inline-block'}} src={ErrorImg} alt="" />
    </div>
  )
}
