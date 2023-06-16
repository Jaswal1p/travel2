import React, {useState} from "react";
import './navbar.css';
import { MdOutlineTravelExplore } from "react-icons/md"
import { AiFillCloseCircle } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"
// import { useState } from 'react';

const Navbar = () => {
    // eslint-disable-next-line
    const [active, setActive] = useState('navBar');
    
    const showNav = ()=> {
        setActive('navBar activeNavBar');
    }

    const removeNavbar = () => {
        setActive('navBar');
    }

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#section" className="logo flex">
                      <h1><MdOutlineTravelExplore className="icon"/>   Travel</h1>
                    </a>
                </div>

                <div className={active}>
                   <ul className="navLists flex">

                        <li className="navItem">
                        {/* eslint-disable-next-line     */}
                        <a href="#" className="navlink">Home</a>
                        </li>

                        <li className="navItem">
                        {/* eslint-disable-next-line     */}    
                        <a href="#" className="navlink">Packages</a>
                        </li>

                        <li className="navItem">
                        {/* eslint-disable-next-line     */}    
                        <a href="#" className="navlink">Shop</a>
                        </li>

                        <li className="navItem">
                        {/* eslint-disable-next-line     */}    
                        <a href="#" className="navlink">About</a>
                        </li>

                        <li className="navItem">
                        {/* eslint-disable-next-line     */}    
                        <a href="#" className="navlink">Pages</a>
                        </li> 

                        <li className="navItem">
                        {/* eslint-disable-next-line     */}    
                        <a href="#" className="navlink">News</a>
                        </li>  

                        <li className="navItem">
                        {/* eslint-disable-next-line     */}    
                        <a href="#" className="navlink">Contact</a>
                        </li> 

                        <button type="button" className="btn">
                            Book Now
                        </button>                   
                   </ul>
                   <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className="icon"/>
                   </div>

                </div>

                <div onClick={showNav} lassName="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header>
        </section>
    )
}

export default Navbar