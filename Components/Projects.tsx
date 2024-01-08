import Image from 'next/image'
import React from 'react'

const Projects = () => {

    const projects = [

        {
            urlimage: "/images/p4.jpg",
        },
        {
            urlimage: "/images/p5.jpg",
        },
        {
            urlimage: "/images/p4.jpg",
        }

    ]


    return (
        <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
            <h1 className='heading'>
                Pro<span className='text-yellow-500'>Jects</span>
            </h1>
            <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>

                {

                    projects?.map((project, index) => (

                        <div key={index} className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                            <Image
                                src={project?.urlimage}
                                alt="project"
                                layout="fill"
                                className="object-contain"
                            />
                        </div>

                    ))

                }

            </div>
        </div>
    )
}

export default Projects