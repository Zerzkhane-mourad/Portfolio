import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from "@heroicons/react/16/solid"

const Services = () => {
    return (

        <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]" >
            <p className="heading">
                My <span className="text-yellow-500">Services</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[2.5rem] mt-[4rem] text-white">
                <div>
                    <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem]">
                        <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] my-[1.5rem]"> Frontend</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                            Skilled in React.js, Next.js for server-side rendering, and Tailwind CSS for highly customizable, rapid UI development, ensuring seamless user experiences while staying updated with evolving front-end trends.

                        </p>
                    </div>
                </div>
                <div>
                    <div className="bg-blue-400 hover:scale-110 transform transition-all duration-300 font-semibold text-center p-[2rem]">
                        <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] my-[1.5rem]">FullStak</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatem eos quasi nesciunt animi possimus la
                            udantium atque veritatis facere recusandae eaque?
                        </p>
                    </div>
                </div>
                <div>
                    <div className="bg-orange-500 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem]">
                        <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] my-[1.5rem]">Backend</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatem eos quasi nesciunt animi possimus la
                            udantium atque veritatis facere recusandae eaque?
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services