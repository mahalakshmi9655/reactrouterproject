import React from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
  const navigate=useNavigate()
  return (
    <div>
      <h1>This is View Component</h1>
      <input type="button" onClick={()=>navigate(-1)} value="back"></input>
    </div>
  )
}

export default View
