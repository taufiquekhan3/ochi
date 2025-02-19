import React, { useEffect, useState } from 'react'

const Eyes = () => {

   const [angle,setangle] = useState(0);

    useEffect(() => {
    
   window.addEventListener("mousemove", (e) => {
   let mouseX = e.clientX;
   let mouseY = e.clientY;
   console.log(mouseX,mouseY)
    let centerX = mouseX - window.innerWidth/2;
    let centerY = mouseY - window.innerHeight/2;

    const radians = Math.atan2(centerY,centerX)

    const degrees = radians * (180/Math.PI);
     
    setangle(degrees-180)
   })

    })
    

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-section data-scroll-speed="-.9" className='data-scroll data-scroll-speed="-.2" relative w-full h-full
          bg-cover bg-center  
          bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]
          '>
        <div className="absolute flex justify-center gap-10 top-1/2 left-1/2  w-1/2 -translate-x-[50%] -translate-y-[50%] h-96">

          <div className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-50'>
            <div className='relative flex justify-center items-center w-2/3 h-2/3 bg-zinc-900 rounded-full'>
              <div style={{transform: `translate(-50%, -50%) rotate(${angle}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 ">
                <div  className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>


          <div className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-50'>
            <div className='relative flex justify-center items-center w-2/3 h-2/3 bg-zinc-900 rounded-full'>
              <div className="line rotate-45 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 ">
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>


        </div>

      </div>

    </div>
  )
}

export default Eyes
