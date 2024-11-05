import React, { useState } from "react";
import "./navbar.css";
import About from "../about/About";
import HoverButton from "../buttons/HoverButton";

function Navbar({ menu, name, age, address }) {
  let List;
  // let biodata = {};
  const [biodata2, setBiodata2] = useState({});

  if (menu) {
    List = (
      <ul className="navbar-menu">
        {menu.map((item, index) => (
          <li key={index} className="navbar-item">
            {item}
          </li>
        ))}
      </ul>
    );
  } else {
    List = <h1>tidak ditemukan</h1>;
  }

  function handleTriggerSelect(selectedStudent) {
    console.log(`ke trigger ${selectedStudent}`);
    setBiodata2({
      ...biodata2,
      name,
      age,
      address,
    });
    biodata2 = {
      ...biodata2,
      name,
      age,
      address,
    };
  }

  return (
    <>
      <div onClick={""}>
        <div>
          {/* <button onClick={''}> &times; </button> */}
          <div>
            Biodata: {biodata2.name} {biodata2.age} {biodata2.address}
          </div>
        </div>
      </div>

      <nav className="navbar">
        <h1 className="navbar-title">FSW 2 {name}</h1>
        {List}
      </nav>
      <About name={name[0]} age={age[0]} address={address[0]} />
      <HoverButton onSelect={() => handleTriggerSelect(name)}>
        click me !
      </HoverButton>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default Navbar;
