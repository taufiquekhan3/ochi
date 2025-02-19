import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3.7" className='p-20 text-black w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
      <h1 className='text-[3vw] leading-[2.8vw] tracking-normal'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea esse eius corrupti voluptatum consectetur numquam officiis non dolor ipsum necessitatibus velit, id, incidunt architecto dolorem, nesciunt a maiores quas alias!
      </h1>
      <div className='flex gap-5 w-full border-t-[1px] pt-10 mt-20 border-[#b2c76e]'>
      <div className="w-1/2">
        <h1 className='text-[4.5vw]'>Our Approach: </h1>
        <button className='mt-2 px-5 py-4 uppercase bg-zinc-900 rounded-full text-white flex gap-10 items-center '>Read More
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </button>
      </div>
      <div className="w-1/2 h-[70vh] rounded-2xl ">
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
      </div>
      </div>

    </div>
  )
}

export default About
