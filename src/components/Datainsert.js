import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Datainsert = () => {
    const navigate=useNavigate()
    const [rno,setRno]=useState("")
    const [sname,setName]=useState("")
    const [mark,setMark]=useState("")
    const [rank,setRank]=useState("") 
    const [finres,setFinres]=useState([])
    const dis=(event)=>{
      if(event.target.id==="rno")
        setRno(event.target.value)
      if(event.target.id==="sname")
        setName(event.target.value)
      if(event.target.id==="mark")
        setMark(event.target.value)
      if(event.target.id==="rank")
        setRank(event.target.value)


    }
    const result=()=>
    {
      const resjson={
        rno:rno,
        sname:sname,
        mark:mark,
        rank:rank
      }
      console.log("myjson",resjson)
      //setFinres([resjson]) ->one array store
      //finres.push(resjson)
       setFinres([resjson,...finres])
    }
  return(
    <div>
      <h1>Student information -Insert/Save form</h1>
      <br></br>
      <input type='text'id="rno" onChange={(ev)=>dis(ev)}value={rno}placeholder='enter the roll no'></input><br></br>
      <input type='text' id="sname"onChange={(ev)=>dis(ev)}value={sname}placeholder='enter student name'></input> <br></br>
      <input type='text' id="mark" onChange={(ev)=>dis(ev)} value={mark}placeholder='enter  Mark'></input><br></br>
      <input type='text' id="rank"onChange={(ev)=>dis(ev)} value={rank}placeholder='Enter rank'></input><br></br>
      <button onClick={result}>Store to Array</button>
      <button onClick={()=>navigate("/view")}>Go to view component</button><br></br>
      <hr size="2" color="blue"></hr>
      <h2>Student result</h2>
      <hr size="2" color="blue"></hr>
      {finres.map((item)=>
          <>
          roll number:{item.rno}
          <br></br>
          Student name:{item.sname}
          <br></br>
          Student Mark:{item.mark}
          <br></br>
          StudentRank:{item.rank}
          <hr size="2" color="blue" width="50%" align="left"></hr>

          </>
         )}
    </div>
  )
}

export default Datainsert
