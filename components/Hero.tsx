"use client"

import React from 'react'
import './Hero.scss'
import {motion, spring, useAnimate, useAnimationControls} from 'framer-motion'
import Image from 'next/image'
import car from '@/public/car.jpg'

const Hero = () => {

const list = {
    initial : {
        opacity:1,
        clipPath: 'circle(6.0% at 10% 7%)'
    },
    animate  : {
        clipPath: 'circle(168.3% at 10% 7%)'
    }
}  

const item = {
    initial : {
        opacity:0,
        bottom:-10
    },
    animate  : {
        opacity:1
    }
}

const [scope, animate] = useAnimate()

  return (
    <div className='hero'>
        <motion.div ref={scope} onClick={()=>animate(scope.current, {clipPath: 'circle(168.3% at 10% 7%)'})} className="sidebar" variants={list} initial="initial" transition={{duration:5,ease:'linear',staggerChildren:0.2}}>
            <motion.div className="link" variants={item} initial="initial" animate="animate" transition={{duration:0.5,type:spring,damping:100}} >Link 1</motion.div>
            <motion.div className="link" variants={item} initial="initial" animate="animate" transition={{duration:0.5,type:spring,damping:100}} >Link 2</motion.div>
            <motion.div className="link" variants={item} initial="initial" animate="animate" transition={{duration:0.5,type:spring,damping:100}} >Link 3</motion.div>
            <motion.div className="link" variants={item} initial="initial" animate="animate" transition={{duration:0.5,type:spring,damping:100}} >Link 4</motion.div>
        </motion.div>
    </div>
  )
}

export default Hero