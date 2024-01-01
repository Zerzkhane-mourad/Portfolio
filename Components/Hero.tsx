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
                    <p className="mt-[2rem] text-[20px] text-[#ffffff92] ">
                    I proficiently handle both frontend and backend technologies, crafting dynamic and responsive web applications. Proficient in using frameworks like React, Angular, or Vue for frontend and Node.js or Express.js for backend development. Skilled in database management using MongoDB, SQL, or other modern databases. Experienced in creating RESTful APIs, ensuring smooth communication between the server and client. Committed to delivering high-quality, scalable solutions while staying updated with the latest industry trends and best practices.
                    </p>
                </div>
                <div className="w-[500px] h-[500px] hidden relative lg:flex items-center rounded-full ">
                    <Image src="/images/7O4.jpg" alt="user" layout="fill" className="object-cover rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default Hero