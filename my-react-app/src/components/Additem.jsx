// components/AnimatedRecipeCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Additem(props) {
  return (
<>
<div className="border-2 border-[#DA70D6] m-2 flex  flex-row  md:  rounded-lg object-cover hover:shadow-xl transition-shadow duration-300 cursor-pointer">
  <img src={props.imgsrc}  alt={props.imgalt}  className="w-25 h-25 m-2  hover:shadow-xl transition-shadow duration-300 cursor-pointer  rounded-2xl border- shadow-lg " /><div>
   <h2 className="mt-2 font-bold ">{props.tittle}</h2>
   <p className="text-sm line-clamp-2 md:line-clamp-none ">{props.description}</p>
    </div>

</div>
{/* <div className=" border-2  border-[#DA70D6] m-3.5 flex  flex-row  md:  rounded-lg object-cover hover:shadow-xl transition-shadow duration-300 cursor-pointer " > hello</div> */}


</>
  );
}
