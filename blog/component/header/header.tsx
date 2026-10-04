'use client'
import Image from "next/image"
import Link from "next/link"
import Simple from "./highLight";
import SearchBar from "@/component/search";
import { useState } from "react";


export default function Header(){
    
    const [menubar, setMenubar] = useState(false)
    
    return(<>
            <header className="border-b border-[#80808027] px-4 md:px-10">
                <nav className="flex justify-between items-center py-4">
                    <div>
                        <Link className="brightness-0 invert" href='/'>
                            <Image 
                                src="/logo/favicon.png" 
                                alt="logo" 
                                width={50} 
                                height={50} 
                                priority 
                                className="w-10 sm:w-12 h-auto"
                                style={{ height: "auto" }}
                            />
                        </Link> 
                    </div>
                    <div>
                        <ul className="hidden md:flex gap-8 lg:gap-10">
                            <li className="rounded-[5px] px-3 py-2 hover:bg-[#ffffff09]">
                                <Simple href="/">Home</Simple>
                            </li>
                            <li className="rounded-[5px] px-3 py-2 hover:bg-[#ffffff09]">
                                <Simple href="/topic">Topic</Simple>
                            </li>
                            <li className="rounded-[5px] px-3 py-2 hover:bg-[#ffffff09]">
                                <Simple href="/about">About</Simple>
                            </li>
                            <li className="rounded-[5px] px-3 py-2 hover:bg-[#ffffff09]">
                                <Simple href="/contact">Contact</Simple>
                            </li>
                        </ul>
                    </div>
                
                    <div className="flex flex-row gap-3 sm:gap-5 items-center">
                        <SearchBar className="w-36 focus-within:w-48 sm:w-56 sm:focus-within:w-72 md:w-64 md:focus-within:w-80 transition-all duration-200" />
                        <button className="hidden md:flex justify-center items-center h-10 px-5 border-2 rounded-full cursor-pointer hover:bg-[#80808067] text-sm font-medium shrink-0">
                            Subscribe
                        </button>
                        <div className="md:hidden">
                            <button 
                                className="flex justify-center items-center w-10 h-10 border border-neutral-700 font-semibold text-lg rounded-lg hover:bg-[#ffffff09]" 
                                onClick={()=>setMenubar((prev)=>!prev)}
                                aria-label="Toggle menu"
                            >
                                {menubar ? "✕" : "☰"}
                            </button>
                        </div>
                    </div>
                </nav>
                {menubar && (
                    <ul className="md:hidden py-3 border-t border-neutral-800 flex flex-col gap-2">
                        <li onClick={()=>setMenubar(false)} className="rounded px-3 py-2 hover:bg-[#ffffff09]">
                            <Simple href='/'>Home</Simple>
                        </li>
                        <li onClick={()=>setMenubar(false)} className="rounded px-3 py-2 hover:bg-[#ffffff09]">
                            <Simple href='/topic'>Topic</Simple>
                        </li>
                        <li onClick={()=>setMenubar(false)} className="rounded px-3 py-2 hover:bg-[#ffffff09]">
                            <Simple href='/about'>About</Simple>
                        </li>
                        <li onClick={()=>setMenubar(false)} className="rounded px-3 py-2 hover:bg-[#ffffff09]">
                            <Simple href='/contact'>Contact</Simple>
                        </li>
                    </ul>
                )}
            </header>
    </>)
}