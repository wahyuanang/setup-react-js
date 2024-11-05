import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HoverButton from "./components/buttons/HoverButton";

function App() {
  const [count, setCount] = useState(0);
  const menu = ["Menu", "About", "Logout"];
  const name = ["Wahyu"];
  const age = ["20"];
  const address = ["Jakarta"];

  return (
    <>
      <Navbar menu={menu} name={name} age={age} address={address} />
      {/* <Navbar /> */}
    </>
  );
}

export default App;
