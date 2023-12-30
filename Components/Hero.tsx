import Image from "next/image"
import Particle from "./Particle"
import TextAnimation from "./TextAnimation"

const Hero = () => {
    return (
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
            <Particle />
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                        HI, I&apos;M <span className="text-yellow-500">MOURAD</span>
                    </h1>
                    <TextAnimation />
                </div>
                <div className="w-[500px] h-[500px] hidden relative lg:flex items-center rounded-full ">
                    <Image src="/images/7O4.jpg" alt="user" layout="fill" className="object-cover rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default Hero