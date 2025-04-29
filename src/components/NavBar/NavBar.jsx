import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { RightArrowIcon, MenuIcon } from "../Icons/Icons"

export default function NavBar() {
    const [actualWindow, setActualWindow] = useState("/")
    const [isDevice, setIsDevice] = useState("Pc")
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()

    const checkWindow = (path) => {
        if (path.includes("/contact")) {
            setActualWindow("/contact")
        } else if (path.includes("/projects")) {
            setActualWindow("/projects")
        } else if (path.includes("/about")) {
            setActualWindow("/about")
        } else {
            setActualWindow("/")
        }
    }

    const handleNavigate = (path) => {
        navigate(path)
        setShowMenu(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setIsDevice('Pc');
            } else if (window.innerWidth > 600 && window.innerWidth <= 1024) {
                setIsDevice('Tablet');
            } else {
                setIsDevice('Mobile');
            }
        }

        checkWindow(window.location.pathname)
        window.addEventListener('resize', handleResize);
        handleResize();
    })

    return (
        <div className="font-montserrat fixed z-10 w-full flex justify-between items-center bg-transparent py-5 px-10 text-white">
            {/* Logo Name */}
            <button onClick={() => handleNavigate("/")}>
                <h1 className="font-bold text-xl tracking-[-1px]">ALEXME</h1>
            </button>

            {/* Desktop Navigation */}
            {isDevice == "Pc" && (
                <div className="flex gap-10 text-lg">
                    <button onClick={() => handleNavigate("/")}>
                        <h1 className={`${actualWindow == "/" ? "text-[#ffffff]" : "text-[#9b9b9b]"}`}>HOME</h1>
                    </button>
                    <button onClick={() => handleNavigate("/about")}>
                        <h1 className={`${actualWindow == "/about" ? "text-[#ffffff]" : "text-[#9b9b9b]"}`}>ABOUT</h1>
                    </button>
                    <button onClick={() => handleNavigate("/projects")}>
                        <h1 className={`${actualWindow == "/projects" ? "text-[#ffffff]" : "text-[#9b9b9b]"}`}>PROJECTS</h1>
                    </button>
                </div>
            )}

            {/* Desktop Contact Button */}
            {isDevice == "Pc" && (
                <button className="flex items-center gap-2 p-2 rounded-tr-lg rounded-bl-lg bg-[#6b2de6]">
                    <RightArrowIcon color="white" h={20} w={20} />
                    <h1 className="font-bold">CONTACT ME</h1>
                </button>
            )}

            {/* Mobile Menu Button */}
            {isDevice != "Pc" && (
                <button onClick={() => setShowMenu(!showMenu)}>
                    <MenuIcon color="white" h={30} w={30} />
                </button>
            )}

            {/* Mobile Menu Content */}
            {isDevice != "Pc" && showMenu && (
                <div className="absolute top-20 right-10 bg-[#1a1a1a] p-5 rounded-lg flex flex-col gap-5 text-lg">
                    <button onClick={() => handleNavigate("/")}>
                        <h1 className={`${actualWindow == "/" ? "text-[#ffffff]" : "text-[#9b9b9b]"}`}>HOME</h1>
                    </button>
                    <button onClick={() => handleNavigate("/about")}>
                        <h1 className={`${actualWindow == "/about" ? "text-[#ffffff]" : "text-[#9b9b9b]"}`}>ABOUT</h1>
                    </button>
                    <button onClick={() => handleNavigate("/projects")}>
                        <h1 className={`${actualWindow == "/projects" ? "text-[#ffffff]" : "text-[#9b9b9b]"}`}>PROJECTS</h1>
                    </button>
                    <button className="flex items-center gap-2 p-2 rounded-tr-lg rounded-bl-lg bg-[#6b2de6] mt-2">
                        <RightArrowIcon color="white" h={20} w={20} />
                        <h1 className="font-bold">CONTACT ME</h1>
                    </button>
                </div>
            )}
        </div>
    )
}
