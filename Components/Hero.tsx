import Image from "next/image"
import Particle from "./Particle"
import TextAnimation from "./TextAnimation"
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid"

const Hero = () => {


    const onButtonClick = () => {
        const pdfUrl = "CvMouradZerzkhane.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
            <Particle />
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                        HI, I&apos;M <span className="text-yellow-500">MOURAD</span>
                    </h1>
                    <TextAnimation />
                    <p className="mt-[2rem] text-[20px] text-[#ffffff92] ">
                        Passionate Fullstack JavaScript Developer proficient in modern frameworks and libraries, crafting innovative solutions for seamless web development. Check out my portfolio showcasing dynamic front-end designs and robust back-end systems.
                    </p>
                    <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                        <button onClick={onButtonClick} className="flex items-center space-x-2  px-[2rem] hover:bg-yellow-500 transition-all  duration-200 py-[1rem] text-[18px] text-black font-bold bg-slate-600 ">
                            <b>Dowload Cv</b>
                            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                        </button>
                    </div>
                </div>
                <div className="w-[500px] h-[500px] hidden relative lg:flex items-center rounded-full ">
                    <Image src="/images/7O5.jpg" alt="user" layout="fill" className="object-cover rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default Hero