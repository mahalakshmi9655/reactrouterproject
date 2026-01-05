import React from 'react'
import { useNavigate } from 'react-router-dom'

const Datainsert = () => {
    const navigate=useNavigate()
  return (
    <div>
      <h1>This is Datainsert Component</h1>
      <br></br>
      <button onClick={()=>navigate("/view")}>Go to view component</button>
    </div>
  )
}

export default Datainsert
