"use client"// // import React from 'react'
// // import Link from 'next/link'
// // import "./navbar.css"

// // const Navbar = () => {
// //   return (
// //       <div>
// //           <div className='nav-div'>
// //               <ul className='nav-item'>
// //                   <ul className="nav-ul">
// //                       <li> <Link href={"/"}>Home</Link> </li>
// //                       <li> <Link href={"/about"}>About</Link> </li>
// //                       <li> <Link href={"/contact"}>Contact</Link> </li>
// //                       <li> <Link href={"/"}>Home</Link> </li>
// //                       </ul>
// //               </ul>
// //           </div>
// //     </div>
// //   )
// // }

// // export default Navbar
// "use client"
// import React, { useState } from "react";
// import Link from "next/link";
// import "./navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="nav-div">
//       <div className="nav-container">
//         <h1 className="nav-logo">Logo</h1>
        
//         {/* Hamburger Icon (Small screens only) */}
//         <div className="hamburger" onClick={toggleMenu}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>

//         {/* Navigation Links */}
//         <ul className={`nav-ul ${isOpen ? "open" : ""}`}>
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import Link from 'next/link';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/">MySite</Link>
        </div>
        
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? 'bar open' : 'bar'}></div>
          <div className={isOpen ? 'bar open' : 'bar'}></div>
          <div className={isOpen ? 'bar open' : 'bar'}></div>
        </div>
        
        {/* Navbar Links */}
        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
