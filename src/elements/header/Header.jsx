import { useState } from "react";
import FullScreenMenu from "./FullScreenMenu";
import Navbar from "./Navbar";
import Hero from "./Hero";

function Header({ heroContent }) {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <FullScreenMenu show={toggle} onSetToggle={setToggle} />
      <Navbar show={toggle} onSetToggle={setToggle} />
      <Hero heroContent={heroContent} />
    </header>
  );
}

export default Header;
