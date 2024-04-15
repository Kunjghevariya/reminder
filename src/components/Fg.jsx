import React, { useEffect, useState } from 'react'

const Fg = ({ data }) => {
  const [end, setend] = useState(new Date(data.date))
  
  const [day, setday] = useState(0)
  const [hours, sethours] = useState(0)
  const [miniute, setminiute] = useState(0)
  const [second, setsecond] = useState(0)

const gettime = ()=>{
  const time = (Date.parse(end)-Date.now())/1000
  setday(Math.floor(time / 3600 / 24))
  sethours(Math.floor((time / 3600) % 24))
  setminiute(Math.floor((time / 60) % 60))
  setsecond(Math.floor(((time) % 60)))
}
useEffect(() => {
  const interval = setInterval(()=>gettime(data.date),1000)

  return () => clearInterval(interval)
},[])




  return (
    <div className="card border border-black w-(100px) h-40 bg-slate-400 rounded-xl m-10 p-2 ">
      <div className="name" >
        {data.name}
      </div>
      <div className="reminde">{data.reminde}</div>
      <div className="date">{data.date}</div>
      <div className="count flex gap-5">
        <div className="">
          <div className="days bg-white text-black">{parseInt(day)}</div>
          <h2>days</h2>
        </div>
        <div className="">
          <div className="hours bg-white text-black">{parseInt(hours)}</div>
          <h2>hours</h2>
        </div>
        <div className="">
          <div className="miniutes bg-white text-black">{parseInt(miniute)}</div>
          <h2>minute</h2>
        </div>
        <div className="">
          <div className="second bg-white text-black">{parseInt(second)}</div>
          <h2>second</h2>
        </div>

      </div>
      <div className="desc mb-0 text-center">{data.desc}</div>

    </div>

  )
}

export default Fg
