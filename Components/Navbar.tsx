import { Bars3Icon } from "@heroicons/react/16/solid"


interface Props {
    openNav: () => void;
}

const Navbar = ({openNav}:Props) => {
  return (
    <div className="w-[100%] top-0 h-[12vh] bg-[#141c27] shadow-md sticky z-[1000]">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                WEB
                <span className="text-yellow-500" >DEVELOPER</span>
            </h1>
            <p className="nav-link">Home</p>
            <p className="nav-link">Services</p>
            <p className="nav-link">About</p>
            <p className="nav-link">Projects</p>
            <p className="nav-link">Blog</p>
            <p className="nav-link">contact</p>
            <div onClick={openNav}>
                <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"/>
            </div>
        </div>
    </div> 
  )
}

export default Navbar