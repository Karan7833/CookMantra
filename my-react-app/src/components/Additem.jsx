// components/AnimatedRecipeCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Additem(props) {
  return (
    <>
      {/* <div className="   w-80 h-95 gap-0.5 border-[#DA70D6] p-1 m-4  flex-row rounded-lg object-cover justify-evenly  hover:shadow-xl transition-shadow duration-300 cursor-pointe"> */}
     <div className="border-2 m-5 rounded-lg p-5 border-[#DA70D6]">

  {/* IMAGE WRAPPER */}
  <div className="w-full h-64 overflow-hidden rounded-2xl">
    <img
      src={props.imgsrc}
      alt={props.imgalt}
      className="w-full h-full object-cover hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
    />
  </div>

  {/* CONTENT */}
  <div>
    <h2 className="text-4xl font-bold m-5">{props.tittle}</h2>
  </div>

</div>

      {/* <div className=" border-2  border-[#DA70D6] m-3.5 flex  flex-row  md:  rounded-lg object-cover hover:shadow-xl transition-shadow duration-300 cursor-pointer " > hello</div> */}


    </>
  );
}
