"use client"
import { useState } from "react";
import "./page.scss";
import { motion } from "framer-motion";

export default function Home() {
  
  const [open, setOpen] = useState(false)

  return (
    <motion.div className="sidebar" initial={{clipPath:'circle(20px at 3% 6.2%)'}} animate={open ? {clipPath:'circle(1000px at 3% 6.2%)',transition:{duration:2,delay:0.2}}: {}}>
      <div className="container">
        <motion.a href="#" className="item" whileHover={{scale:1.5}}>Link 1</motion.a>
        <motion.a href="#" className="item" whileHover={{scale:1.5}}>Link 2</motion.a>
        <motion.a href="#" className="item" whileHover={{scale:1.5}}>Link 3</motion.a>
        <motion.a href="#" className="item" whileHover={{scale:1.5}}>Link 4</motion.a>
      <button className="button" onClick={(open)=>setOpen(true)} >click</button>
      </div>
    </motion.div>
  );
}
