import React from 'react'

const Cards = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1"  className='px-32 items-center w-full flex gap-5 h-screen bg-zinc-100'>
            <div className="relative cardcontainer text-white h-[50vh] w-1/2">
                <div className="card w-full rounded-xl h-full  bg-[#004D43] ">
                     <h1 className='flex justify-center items-center h-full text-[5vw]'>ochi</h1>    
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2024</button>
                </div>
            </div>

            <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
                <div className="relative  text-white flex justify-center items-center  card w-full rounded-xl h-full bg-[#121212]">
                    <img  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2024</button>
                </div> 

                <div className="relative  text-white card w-full flex justify-center items-center rounded-xl h-full bg-[#121212] ">
                    <img className='w-1/2' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2024</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
