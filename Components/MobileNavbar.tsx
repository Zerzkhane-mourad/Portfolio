import { XMarkIcon } from "@heroicons/react/16/solid"

interface Props {
    nav: boolean;
    closeNav:  ()=> void;

}

const MobileNavbar = ({nav, closeNav}: Props) => {

    const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";

    return (
        <div className={`fixed  ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}>

            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                <p className="nav-link-mobile">Home</p>
                <p className="nav-link-mobile">Services</p>
                <p className="nav-link-mobile">About</p>
                <p className="nav-link-mobile">Projects</p>
                <p className="nav-link-mobile">Blog</p>
                <p className="nav-link-mobile">contact</p>
            </div>

            <div onClick={closeNav}  className="absolute z-[10000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-500">
                <XMarkIcon/> 
            </div>

        </div>
    )
}

export default MobileNavbar