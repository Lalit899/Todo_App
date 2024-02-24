"use client"
import React, { useState } from "react"

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask,{title,desc}]);
    settitle("");
    setdesc("");
    console.log(maintask)
  } 

  const deleteHandler = (i) => {
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }

  const cmpltHandler = (i) => {
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }

  let task = <h1 className="flex justify-center items-center text-lg  ">No Tasks Available</h1>
  if(maintask.length>0) {
  task = maintask.map((t,i)=>{
    return ( <li key={i} className="flex justify-between mx-8 items-center font-semibold font-mono capitalize">
      <h1 className="text-xl ">{t.title}</h1>
      <p>{t.desc}</p>
      <div className="flex flex-row justify-around ">
      <button id="del" className="bg-red-400 text-white rounded-lg m-2 px-2 py-1 " onClick= {() => {deleteHandler(i)}} >DELETE</button>
      <button id="cmpl" className="bg-green-500 text-white rounded-lg m-2 px-2 py-1 " onClick= {() => {cmpltHandler(i)}} >COMPLETED</button>
      </div>
    </li>
    )
  })
  }

  return ( 
    <>
    <h1 className="m-5 py-3 text-4xl text-center font-sans bg-violet-600 text-white font-bold rounded-lg ">To Do App</h1>
    <div className="flex items-center justify-center w-auto ">
    <form onSubmit={submitHandler} className="flex flex-col w-1/2 " >
      <input type="text" className="text-2xl m-5 px-4 py-2 border-2 border-violet-400 font-serif rounded-lg capitalize" placeholder="title here" value={title} onChange={(e)=>{settitle(e.target.value) }} required></input>
      <input type="text" className="text-2xl m-5 px-4 py-2 border-2 border-violet-400 font-serif rounded-lg capitalize" placeholder="description here" value={desc} onChange={(e)=>{setdesc(e.target.value) }} required></input>
      <button id="addbtn" className="border-violet-800 bg-violet-800 text-white px-3 py-2 text-xl rounded-lg m-5 ">Add Task</button>
    </form>
    </div>
    <hr/>
    <div className="bg-gray-400 text-violet-800 m-5 p-2 rounded-lg ">
    <ul>
       {task}
    </ul>
    </div>
    </>
  )
  
}

export default page