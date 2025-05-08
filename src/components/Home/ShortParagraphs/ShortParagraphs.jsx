/* eslint-disable react/prop-types */


export default function ShortParagraphs({ language }) {
    return (
        <div className="max-lg:flex-1 max-lg:flex max-lg:flex-col max-lg:justify-around">
            <div
                className="lg:absolute left-12 animate__animated animate__zoomIn
                    top-[55%] max-2xl:top-[60%] max-xl:top-[58%]"
                >
                <h1
                    className="font-bold lg:hidden
                    text-[14px] max-lg:text-[18px] max-sm:text-[12px]"
                >
                    {language === "EN" ? "WHAT I DO" : "QUÉ HAGO"}
                </h1>

                <h1
                    className="font-extralight
                    w-96 max-2xl:w-72 max-xl:w-44 max-lg:w-[45%]
                    max-xl:text-[12px] max-lg:text-[16px] max-sm:text-[10px]"
                >
                    {language === "EN"
                        ? "As a Software Developer I craft code that powers seamless and scalable digital solutions."
                        : "Como Desarrollador de Software, creo código que impulsan soluciones digitales sin problemas y escalables."}
                    
                </h1>
            </div>

            <div
                className="lg:absolute lg:right-10 flex flex-col items-end animate__animated animate__zoomIn
                    top-[30%] max-2xl:top-[32%] max-xl:top-[35%]"
                >
                <h1
                    className="font-bold lg:hidden
                    text-[14px] max-lg:text-[18px] max-sm:text-[12px]"
                >
                    {language === "EN" ? "MY PHILOSOPHY" : "MI FILOSOFÍA"}
                </h1>

                <h1
                    className="font-extralight text-end
                    w-96 max-2xl:w-72 max-xl:w-44 max-lg:w-[45%]
                    max-xl:text-[12px] max-lg:text-[16px] max-sm:text-[10px]"
                >
                    {language === "EN"
                        ? "I build efficient, reliable, and user-focused applications that make a difference."
                        : "Creo aplicaciones eficientes, fiables y personalizadas para el usuario que marcan la diferencia."}
                </h1>
            </div>
        </div>
    )
}