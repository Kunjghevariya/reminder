import React from 'react';
import Fg from './components/Fg';

const App = () => {
  const data = [
    { name: "Kunj Ghevariya", reminde: "birthday", date: "04/04/25", desc: "happy birthday" },
    { name: "Fento 🍹", reminde: "birthday", date: "13 Jun 2025", desc: "happy birthday" },
    { name: "Lambo 🤓🦒", reminde: "birthday", date: "28 Nov 2024", desc: "happy birthday" },
    { name: "Lathiyo 🐆", reminde: "birthday", date: "14 Dec 2024", desc: "happy birthday" },
    { name: "Matko 🛢️", reminde: "birthday", date: "19 Sept 2025", desc: "happy birthday" },
    { name: "Pekko 🤖", reminde: "birthday", date: "1 Sept 2025", desc: "happy birthday" },
    { name: "Tikadi 💊", reminde: "birthday", date: "26 Jan 2025", desc: "happy birthday" },
    { name: "Kondo 🔫🥸", reminde: "birthday", date: "12 Jan 2025", desc: "happy birthday" },
    { name: "Vedu 😎", reminde: "birthday", date: "17 Nov 2024", desc: "happy birthday" },
    { name: "Divlo 👩‍⚕️", reminde: "birthday", date: "08 Sept 2025", desc: "happy birthday" },
    { name: "Nado 😤", reminde: "birthday", date: "28 April 2025", desc: "happy birthday" },
    { name: "Bhavlo 🙄", reminde: "birthday", date: "03 Dec 2024", desc: "happy birthday" },
    { name: "Buttho 💁‍♂️", reminde: "birthday", date: "22 Dec 2024", desc: "happy birthday" },
    { name: "Mino 👈 👉", reminde: "birthday", date: "30 Sept 2025", desc: "happy birthday" }
  ];


  data.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <>
      <div className="title text-center text-6xl">Reminder</div>
      <div className='bg flex flex-wrap'>
        {data.map((item, index) => (
          <Fg key={index} data={item} />
        ))}
      </div>
    </>
  );
}

export default App;
