import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const LandingPage = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.95" className='w-full h-screen bg-white pt-1 text-black '>
            <div className='textstructure mt-52 px-20 text-[5vw]'>
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return (
                        <div className="masker">
                            <div className="w-fit flex items-end overflow-hidden">
                                {index === 1 && (
                                    <motion.div  //only framer-motion
                                        initial={{ width: 0 }}
                                        animate={{ width: "8vw" }}
                                        transition={{ ease: [0.87, 0, 0.13, 1], duration: 2 }}
                                        className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] bottom-[0.7vw] relative"
                                        style={{
                                            backgroundImage: 'url(https://th.bing.com/th/id/OIP.QzVz6C7P93rFGuUq2GBAkAAAAA?dpr=1.3&pid=ImgDetMain)',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}>
                                    </motion.div>
                                )}
                                <h1 className="pt-[1vw] -mb-[1vw] uppercase text-[9vw] leading-[.75]"></h1>
                                {item}
                            </div>
                        </div>
                    )
                })}
            </div>


            <div className="border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-5 px-20">

                {["For public and private companies", "From the first pitch to IPO"

                ].map((item, index) => {
                    return <p className="text-md font-light tracking-tight leading-none">{item}</p>
                })}


                <div className="start flex items-center gap-5">
                    <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md rounded-full capitalize">Start the project</div>

                    <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-400">
                        <span className='rotate-[45deg]'>
                            <FaArrowUp />
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
