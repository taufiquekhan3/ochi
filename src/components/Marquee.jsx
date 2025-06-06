
import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2.5" className='w-full py-24 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 gap-5 flex overflow-hidden whitespace-nowrap">
        
        <motion.h1 initial={{x: 0}} 
        animate={{x:"-100%"}} 
        transition={{ease: "linear",repeat: Infinity, duration: 5}}
        className='text-[15vw] leading-none font-semibold uppercase pt-24 mb-24'>we are ochi</motion.h1>

        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear",repeat: Infinity, duration: 5}} className='text-[15vw] leading-none font-semibold uppercase pt-24 mb-24'>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
