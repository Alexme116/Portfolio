import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import RightArrowIcon from "../Icons/Icons"

export default function NavBar() {
    const [actualWindow, setActualWindow] = useState("/")
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

    useEffect(() => {
        checkWindow(window.location.pathname)
    })

    return (
        <div className="fixed z-10 w-full flex justify-between items-center bg-transparent py-5 px-10 text-white">
            {/* Logo Name */}
            <button onClick={() => navigate("/")}>
                <h1 className="font-bold text-xl text-">ALEXME</h1>
            </button>

            {/* Navigations */}
            <div className="flex gap-10 text-lg">
                {/* Home Button */}
                <button onClick={() => navigate("/")}>
                    <h1 className={`${actualWindow == "/" ? "text-[#ffffff]" : "text-[#ffffff67]"}`}>
                        HOME
                    </h1>
                </button>
                {/* About Button */}
                <button onClick={() => navigate("/about")}>
                    <h1 className={`${actualWindow == "/about" ? "text-[#ffffff]" : "text-[#ffffff67]"}`}>
                        ABOUT
                    </h1>
                </button>
                {/* Projects Button */}
                <button onClick={() => navigate("/projects")}>
                    <h1 className={`${actualWindow == "/projects" ? "text-[#ffffff]" : "text-[#ffffff67]"}`}>
                        PROJECTS
                    </h1>
                </button>
            </div>

            {/* Contact Button */}
            <button className="flex items-center gap-2 p-2 rounded-tr-lg rounded-bl-lg bg-[#6b2de6]">
                {/* Arrow */}
                <RightArrowIcon color="white" h={20} w={20} />

                {/* Text */}
                <h1 className="font-bold">CONTACT ME</h1>
            </button>
        </div>
    )
}