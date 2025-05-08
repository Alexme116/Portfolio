/* eslint-disable react/prop-types */
import { GithubIcon, LinkedinIcon } from "../../Icons/Icons"


export default function NameImage({ language }) {
    return (
        <div
            className="w-full nameImage flex justify-center gap-4 bg-[#170a2b]
                max-lg:p-5
                max-lg:flex-col max-lg:items-center"
        >
            {/* Name & Image */}
            <div
                className="relative h-full
                    w-[29rem] max-md:w-[26rem] max-sm:w-[20rem]
                    lg:mb-20"
            >
                <div className="flex flex-col">
                    <div className="overflow-hidden flex flex-col">
                        <h1
                            className="font-bold leading-[47px] animate__animated animate__fadeInLeft
                                mt-28 max-lg:mt-24 max-md:mt-20
                                text-[48px] max-md:text-[40px]"
                        >
                            Alex<br /> Moncada.
                        </h1>
                        <div className="mt-6 w-14 h-2 bg-[#6b2de6] opacity-0 animate-fadeInDelayed" />
                    </div>

                    <div className="w-full mt-24 flex items-center gap-3 opacity-0 animate-fadeInDelayed">
                        <button>
                            <LinkedinIcon w={"20px"} h={"20px"} />
                        </button>

                        <button>
                            <GithubIcon w={"20px"} h={"20px"} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div
                className="h-full w-[20rem] flex items-center opacity-0 animate-fadeInDelayed
                    max-lg:mt-20 max-md:mt-16
                    max-lg:mb-20 max-md:mb-16"
            >
                <div className="flex flex-col">
                    <h1 className="text-sm text-[#a7a7a7]">
                        {language === "EN"
                            ? "- Introduction"
                            : "- Introducción"}
                    </h1>
                    <h1 className="mt-3 font-bold">
                        {language === "EN"
                            ? "Software Developer, based in Mexico"
                            : "Desarrollador de Software, con sede en México"}
                    </h1>
                    <h1 className="mt-5 text-xs text-[#a7a7a7]">
                        {language === "EN"
                            ? "I am a passionate software developer with a strong interest in creating innovative solutions and improving user experiences. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies and methodologies."
                            : "Soy un desarrollador de software apasionado con un gran interés en crear soluciones innovadoras y mejorar la experiencia del usuario. Tengo experiencia en varios lenguajes de programación y frameworks, y siempre estoy ansioso por aprender nuevas tecnologías y metodologías."}
                    </h1>
                </div>
            </div>
        </div>
    )
}