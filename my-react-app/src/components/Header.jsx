import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Signup from "./Signup.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);

  const categories = [
    "Trending Recipes",
    "Uttar Pradesh",
    "North Indian",
    "Punjabi",
    "Chinese",
    "Rajasthani",
  ];

  return (
    <>
     

        {/* HEADER ALWAYS VISIBLE */}
        <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

            {/* BRAND */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold shadow">
                CM
              </div>
              <div>
                <div className="font-semibold text-sm flex">
                  <p className="text-[#DA70D6]">Co</p>
                  <p className="text-[#DA70D6]">oK</p>
                  <p className="text-[#880085]">Mantra</p>
                </div>
                <p className="text-xs text-gray-500">Exclusive Recipes</p>
              </div>
            </div>

            {/* SEARCH */}
            <div className="flex-1 hidden md:block px-6">
              <input
                placeholder="Search..."
                className="w-full bg-[#eef3f5] border border-gray-300 rounded-xl py-2 px-4 text-sm"
              />
            </div>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-6">
             <Link to="/Home"> <a className="text-sm text-[#DA70D6] cursor-pointer">Home</a></Link>
              <a className="text-sm text-[#880085] cursor-pointer">Pricing</a>
              <a className="text-sm text-[#DA70D6] cursor-pointer">Blog</a>

              <Link to="/Signup">
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-lg shadow font-medium">
                  Sign In
                </button>
              </Link>
            </div>

            {/* MOBILE MENU BTN */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden bg-white px-4 py-3 space-y-3 border-t"
              >
                <input
                  placeholder="Search..."
                  className="w-full bg-[#eef3f5] border border-gray-300 rounded-xl py-2 px-4 text-sm"
                />

                 <Link to="/Home">  <a className="block py-1 text-[#DA70D6]">Home</a></Link>
                <a className="block py-1 text-[#880085]">Pricing</a>
                <a className="block py-1 text-[#DA70D6]">Blog</a>

                <Link to="/Signup">
                  <button className="w-full py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-lg">
                    Sign In
                  </button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        
       
       
    </>
  );
}
