/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { RightArrowIcon, MenuIcon, TranslateIcon } from "../Icons/Icons"

export default function NavBar({ language, setLanguage }) {
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
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1023) {
                setIsDevice('Pc');
            } else if (window.innerWidth > 600 && window.innerWidth <= 1023) {
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
        <div
            className="relative font-montserrat w-full flex justify-between items-center bg-transparent py-5 text-white
            px-10 max-lg:px-5"
        >
            {/* Logo Name */}
            <button className="z-10" onClick={() => handleNavigate("/")}>
                <h1 className="font-bold text-xl tracking-[-1px] max-lg:text-lg">ALEXME116</h1>
            </button>

            {/* Desktop Navigation */}
            {isDevice == "Pc" && (
                <div className="absolute z-0 top-0 left-0 w-full h-full flex justify-center items-center gap-10 text-lg">
                    <button onClick={() => handleNavigate("/")}>
                        <h1 className={`${actualWindow == "/" ? "text-[#ffffff]" : "text-[#9b9b9b]"}`}>
                            {language == "EN" ? "HOME" : "INICIO"}
                        </h1>
                    </button>
                    <button onClick={() => handleNavigate("/about")}>
                        <h1 className={`${actualWindow == "/about" ? "text-[#ffffff]" : "text-[#9b9b9b]"}`}>
                            {language == "EN" ? "ABOUT" : "SOBRE MI"}
                        </h1>
                    </button>
                    <button onClick={() => handleNavigate("/projects")}>
                        <h1 className={`${actualWindow == "/projects" ? "text-[#ffffff]" : "text-[#9b9b9b]"}`}>
                            {language == "EN" ? "PROJECTS" : "PROYECTOS"}
                        </h1>
                    </button>
                </div>
            )}

            {/* Desktop Contact Button */}
            {isDevice == "Pc" && (
                <div className="z-10 flex items-center gap-5">
                    {/* Translate Button */}
                    <button className="flex items-center gap-2" onClick={() => setLanguage(language == "EN" ? "ES" : "EN")}>
                        <TranslateIcon color="white" h={20} w={20} />
                        <h1>{language == "EN" ? "ES" : "EN" }</h1>
                    </button>

                    <button
                        className="flex items-center gap-2 p-2 rounded-tr-lg rounded-bl-lg bg-[#6b2de6]"
                        onClick={() => handleNavigate("/contact")}
                    >
                        <RightArrowIcon color="white" h={20} w={20} />
                        <h1 className="font-bold">
                            {language == "EN" ? "CONTACT ME" : "CONTACTAME"}
                        </h1>
                    </button>
                </div>
            )}

            {/* Mobile Menu Button */}
            {isDevice != "Pc" && (
                <div className="flex items-center gap-10">
                    {/* Translate Button */}
                    <button className="flex items-center gap-2" onClick={() => setLanguage(language == "EN" ? "ES" : "EN")}>
                        <TranslateIcon color="white" h={18} w={18} />
                        <h1>{language == "EN" ? "ES" : "EN" }</h1>
                    </button>

                    <button onClick={() => setShowMenu(!showMenu)}>
                        <MenuIcon color="white" h={25} w={25} />
                    </button>
                </div>
            )}

            {/* Mobile Menu Content */}
            {isDevice != "Pc" && showMenu && (
                <div
                    className="absolute z-50 top-16 right-5 bg-[#1a1a1a] p-5 rounded-lg flex flex-col gap-5 text-lg
                    max-lg:p-2 max-lg:gap-4"
                >
                    <div className="w-full flex justify-center">
                        <button onClick={() => handleNavigate("/")}>
                            <h1 className={`${actualWindow == "/" ? "text-[#ffffff]" : "text-[#9b9b9b]"}
                                max-lg:text-sm`}>
                                {language == "EN" ? "HOME" : "INICIO"}
                            </h1>
                        </button>
                    </div>
                    <div className="w-full flex justify-center">
                        <button onClick={() => handleNavigate("/about")}>
                            <h1 className={`${actualWindow == "/about" ? "text-[#ffffff]" : "text-[#9b9b9b]"}
                                max-lg:text-sm`}>
                                {language == "EN" ? "ABOUT" : "SOBRE MI"}
                            </h1>
                        </button>
                    </div>
                    <div className="w-full flex justify-center">
                        <button onClick={() => handleNavigate("/projects")}>
                            <h1 className={`${actualWindow == "/projects" ? "text-[#ffffff]" : "text-[#9b9b9b]"}
                                max-lg:text-sm`}>
                                {language == "EN" ? "PROJECTS" : "PROYECTOS"}
                            </h1>
                        </button>
                    </div>
                    <button
                        className="flex items-center gap-2 p-2 rounded-tr-lg rounded-bl-lg bg-[#6b2de6] mt-2
                        max-lg:p-1 max-lg:text-sm max-lg:gap-1"
                        onClick={() => handleNavigate("/contact")}
                    >
                        <RightArrowIcon color="white" h={15} w={15} />
                        <h1 className="font-bold">
                            {language == "EN" ? "CONTACT ME" : "CONTACTAME"}
                        </h1>
                    </button>
                </div>
            )}

            {/* Button Hide Menu */}
            {showMenu && (
                <button
                    className="absolute z-40 h-svh w-svw top-0 left-0 cursor-default"
                    onClick={() => setShowMenu(false)}
                />
            )}
        </div>
    )
}
