import { CodeBracketSquareIcon } from "@heroicons/react/16/solid"

const Services = () => {
    return (

        <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]" >
            <p className="heading">
                My <span className="text-yellow-500">Services</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-3 mt-[4rem] text-white">
                <div>
                    <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem]">
                        <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] my-[1.5rem]"> Frontend</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatem eos quasi nesciunt animi possimus la
                            udantium atque veritatis facere recusandae eaque?
                        </p>
                    </div>
                </div>
                <div>FullStak</div>
                <div>Backend</div>
            </div>
        </div>
    )
}

export default Services