import Image from 'next/image'

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
                        <p className='text-[19px] text-slate-300 w-[80%]'>
                        Passionate full-stack JavaScript developer experienced in creating seamless web applications. Proficient in React, Node.js, and MongoDB, blending front-end finesse with powerful back-end functionality. A collaborative problem-solver with a commitment to clean, maintainable code. Committed to continuous learning and contributing to the tech community. Enthusiastic about innovation, seeking to craft intuitive user experiences that push boundaries.                        </p>
                    </div>
                </div>
                <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
                    <Image
                        src="/images/about.jpg"
                        alt='user'
                        layout='fill'
                        objectFit='contain'
                        className='relative z-[11] w-[100%] h-[100%] object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default About