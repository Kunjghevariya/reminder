import React from 'react'
import Fg from './components/Fg'
const App = () => {
  const data = [{ name: "Kunj Ghevariya", reminde: "birthday", date: "04/04/25", desc: "hapyy birthday" }
    , { name: "Fento", reminde: "birthday", date: "13 Jun 2024 ", desc: "hapyy birthday" }, { name: "Lambo", reminde: "birthday", date: "28 Nov 2024 ", desc: "hapyy birthday" }
    , { name: "Lathiyo", reminde: "birthday", date: "14 Dec 2024 ", desc: "hapyy birthday" }, { name: "Matko", reminde: "birthday", date: "19 Sept 2024 ", desc: "hapyy birthday" }
    , { name: "Pekko 🤖", reminde: "birthday", date: "1 sept 2024 ", desc: "hapyy birthday" },{ name : "Tikadi 💊" , reminde : "birthday" , date : "26 jan 2025 " , desc : "hapyy birthday"}
    ,{ name : "Kondo" , reminde : "birthday" , date : "12 Jan 2025 " , desc : "hapyy birthday"},{ name : "Vedu" , reminde : "birthday" , date : "17 Nov 2024 " , desc : "hapyy birthday"}
,{ name : "Divlo 👩‍⚕️" , reminde : "birthday" , date : "08 Sept 2024 " , desc : "hapyy birthday"},{ name : "Nado" , reminde : "birthday" , date : "28 april 2024 " , desc : "hapyy birthday"}
,{ name : "Bhavlo" , reminde : "birthday" , date : "03 dec 2024 " , desc : "hapyy birthday"},{ name : "Buttho" , reminde : "birthday" , date : "22 dec 2024 " , desc : "hapyy birthday"}
,{ name : "Mino 👈 👉" , reminde : "birthday" , date : "30 Sept 2024" , desc : "hapyy birthday"}]
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
