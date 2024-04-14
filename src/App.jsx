import React from 'react'
import Fg from './components/Fg'
const App = () => {
  const data = [{ name: "kunj ghevariya", reminde: "birthday", date: "04/04/25", desc: "hapyy birthday" }
    , { name: "Fento", reminde: "birthday", date: "13 Jun 2024 ", desc: "hapyy birthday" }, { name: "lambo", reminde: "birthday", date: "28 Nov 2024 ", desc: "hapyy birthday" }
    , { name: "ved", reminde: "birthday", date: "14 Dec 2024 ", desc: "hapyy birthday" }, { name: "darsh", reminde: "birthday", date: "19 Nov 2024 ", desc: "hapyy birthday" }
    , { name: "harsh", reminde: "birthday", date: "1 sept 2024 ", desc: "hapyy birthday" },{ name : "mitho" , reminde : "birthday" , date : "26 jan 2025 " , desc : "hapyy birthday"}
    ,{ name : "keval" , reminde : "birthday" , date : "12 Jan 2025 " , desc : "hapyy birthday"},{ name : "vedant" , reminde : "birthday" , date : "17 Nov 2024 " , desc : "hapyy birthday"}
,{ name : "divyesh" , reminde : "birthday" , date : "08 Nov 2024 " , desc : "hapyy birthday"},{ name : "nado" , reminde : "birthday" , date : "28 april 2024 " , desc : "hapyy birthday"}
,{ name : "bhavin" , reminde : "birthday" , date : "03 dec 2024 " , desc : "hapyy birthday"},{ name : "meet" , reminde : "birthday" , date : "22 dec 2024 " , desc : "hapyy birthday"}
,{ name : "mino" , reminde : "birthday" , date : "12 dec 2024" , desc : "hapyy birthday"}]
  return (
    <>
    <div className="tittle text-center text-6xl">Reminder</div>
    <div className='bg flex flex-wrap'>
      {data.map((item, index) => (
        <Fg data={item} />
      ))}
    </div>
    </>
  )
}

export default App