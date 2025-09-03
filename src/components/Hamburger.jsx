import './styles/main.css';
import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import { VscGithubInverted } from "react-icons/vsc";
import { FaTelegram } from "react-icons/fa";


export default function HamburderComponent(){

const [open, setOpen] = useState(false)

return (
  <div>
    <Hamburger
      className="openButton"
      toggled={open}
      toggle={setOpen}
      size={28}
      color="white"
    />

    <div className={`burger-item ${open ? "open" : ""}`}>
      <header className="burger-header">
        <Hamburger
          className="closeButton"
          toggled={open}
          toggle={setOpen}
          size={28}
          color="#c3c7f5"
          
        />
      </header>
      <main className='hamburger-main'>
        <p className='hamburger-p'>my social networks:</p>
       <a className='links'>
        <FaTelegram />
       </a>
       <a className='links'>
       <VscGithubInverted />
       </a>
      </main>
    </div>
  </div>
);


}

