import React from 'react'

const About = () => {
    return (
        <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
                <div>
                    <h1 className='text-[20px] font-bold text-teal-400 mb-[1rem]'>
                        ABOUT ME
                    </h1>
                    <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
                        Transforming <span className='text-yellow-500'>Visions</span>
                    </h2>
                    <div className='mb-[3rem] flex items-center md:space-x-10'>
                        <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>
                    <p className='text-[19px] text-slate-300 w-[80%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ex recusandae neque deleniti? Error laborum, officiis quasi earum nemo magni doloremque et.</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default About