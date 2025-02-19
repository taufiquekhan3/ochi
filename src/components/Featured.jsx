import { motion } from 'framer-motion'
import React, { useState } from 'react'
import {Power4} from "gsap/all";

const Featured = () => {

    const [isHovering1,setHovering1] = useState(false);
    
    const [isHovering2,setHovering2] = useState(false);

 
    return (
        <div className='w-full text-black py-20 bg-white'>
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
                <h1 className='text-7xl tracking-tight'>Featured Projects</h1>
            </div>
            <div>

                <div className='px-20 pb-8'>
                <div className='cards w-full flex gap-10 mt-10'>
    {/* //data-scroll data-scroll-section data-scroll-speed=".1"  */}
                    <div onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)} className="cardcontainer flex relative w-1/2 h-[75vh]">
                      <h1 className='text-[#CDEA68] flex overflow-hidden  absolute left-full -translate-y-1/2 -translate-x-1/2 top-1/2 leading-none font-semibold tracking-tighter z-[9] text-8xl'>
                      {"FYDE".split("").map((item, index) => (
                        <motion.span initial={{y:"100%"}}
                        animate={ isHovering1? {y:"0%"}: {y:"100%"} }
                        transition= {{ ease: [0.87, 0, 0.13, 1], delay: index*0.1 }}
                        className="inline-block" >{item}</motion.span>
                    ))}
                      </h1>
                      <div  className="card w-full rounded-xl h-full overflow-hidden">
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                      </div>
                    </div>
                   
                    <div onMouseEnter={() => setHovering2(true)} onMouseLeave={() => setHovering2(false)} data-scroll data-scroll-speed="0.3" className="cardcontainer relative w-1/2 h-[75vh]">
                    <h1 className='text-[#CDEA68] flex absolute overflow-hidden right-full -translate-y-1/2 translate-x-1/2 top-1/2 leading-none font-semibold tracking-tighter z-[9] text-8xl'>
                    {"VISE".split("").map((item, index) => (
                        <motion.span initial={{y:"100%"}}
                        animate={ isHovering2? {y:"0%"}: {y:"100%"} }
                        transition= {{ ease: [0.87, 0, 0.13, 1], delay: index*0.1 }}
                        className="inline-block" >{item}</motion.span>
                    ))}
                    </h1>
                      <div className="card w-full rounded-xl h-full overflow-hidden">
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                      </div>
                    </div>

                </div>
                </div>
               
            </div>

        </div>

    )
}

export default Featured
