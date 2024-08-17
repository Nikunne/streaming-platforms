"use client"
import React from "react";
import NavbarEntity from "@/app/components/atoms/NavbarEntity";


const Navbar = () => {

    return (
        <nav className = " flex justify-between bg-blue-950 text-white items-center" >
            <NavbarEntity name = "Home"  home/>
            <ul className="flex m-3 space-x-3">
                <li>
                    <NavbarEntity name={"Tester"}/>
                </li>
                <li>
                    <NavbarEntity name={"Super"}/>
                </li>
                <li>
                    <NavbarEntity name={"Stream"}/>
                </li>
            </ul>
        </nav>


    );
}
export default Navbar;