"use client"
import { useState } from "react";
import "./page.scss";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [open, setOpen] = useState(false)

  const sidebarVariants = {
    hidden: {
      x:-300
    },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
        staggerChildren: 0.5
      }
    },
    exit:{
      x: -300,
      transition: {
        when:"afterChildren",
        duration: 1,
        staggerChildren: 0.5,
        staggerDirection: -1
      }
    }
  }

  const linkVariants = {
    hidden: {
      opacity: 0,
      rotateX: 90,
      x: -50,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100
      }
    },
    exit:{
      opacity: 0,
      rotateX: 90,
      x: -50,
      transition: {
        duration: 1,
      }
    }
  }
  return (
    <main>
      <button className="toggleButton" onClick={() => setOpen(open => !open)}>
        {open ? "Close" : "Open"}
      </button>
      <AnimatePresence>
        {
          <motion.div className="sidebar" variants={sidebarVariants} initial="hidden" animate={open?"visible":"exit"} >
            <motion.a href="#" className="link" variants={linkVariants}>Link 1</motion.a>
            <motion.a href="#" className="link" variants={linkVariants}>Link 2</motion.a>
            <motion.a href="#" className="link" variants={linkVariants}>Link 3</motion.a>
            <motion.a href="#" className="link" variants={linkVariants}>Link 4</motion.a>
            <motion.a href="#" className="link" variants={linkVariants}>Link 5</motion.a>
          </motion.div>
        }
      </AnimatePresence>
    </main>
  );
}
