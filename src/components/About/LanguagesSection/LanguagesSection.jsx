/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import {
    HtmlIcon, CssIcon, JavascriptIcon, TypescriptIcon, ReactIcon, NodeIcon, TailwindIcon,
    PythonIcon, FlaskIcon, DjangoIcon, PostgresqlIcon, MysqlIcon, FirebaseIcon, ViteIcon,
    BootstrapIcon, JavaIcon, CppIcon
} from "../../Icons/Icons"

const icons = [
    HtmlIcon, CssIcon, JavascriptIcon, TypescriptIcon, ReactIcon, NodeIcon, TailwindIcon,
    PythonIcon, FlaskIcon, DjangoIcon, PostgresqlIcon, MysqlIcon, FirebaseIcon, ViteIcon,
    BootstrapIcon, JavaIcon, CppIcon
]


export default function LanguagesSection({ language }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`w-full
                lg:transition-all lg:duration-1000
                max-lg:flex max-lg:flex-col
                pb-10 max-lg:pb-5
                ${visible ? "flex flex-col opacity-100" : "lg:absolute lg:opacity-0"}`}
        >
            <div className="w-full">
                <div
                    className="flex flex-col
                        p-10 max-lg:p-5 pb-0"
                >
                    {/* Label */}
                    <h1 className="text-sm text-[#a7a7a7]">
                        {language === "EN"
                            ? "- Languages & Frameworks"
                            : "- Lenguajes y Frameworks"}
                    </h1>

                    {/* Title */}
                    <h1 className="mt-3 font-bold">
                        {language === "EN"
                            ? "Some of the languages and frameworks I have worked with"
                            : "Algunos de los lenguajes y frameworks con los que he trabajado"}
                    </h1>
                </div>
            </div>

            {/* Languages Carousel */}
            <div
                className="w-full overflow-hidden whitespace-nowrap mt-10 bg-[#ffffff05] relative group
                    py-10 max-lg:py-7"
            >
                <div className="marquee group-hover:[animation-play-state:paused] inline-block whitespace-nowrap">
                    {[...Array(2)].map((_, idx) => (
                        <div key={idx} className="inline-block">
                            {[...Array(2)].map(() => (
                                icons.map((Icon, i) => (
                                    <div
                                        key={i}
                                        className="inline-block text-white hover:scale-125 transition-transform duration-300
                                            mx-10 max-lg:mx-7"
                                    >
                                        <div
                                            className=" flex justify-center items-center
                                                w-16 h-16 max-lg:w-8 max-lg:h-8 "
                                        >
                                            <Icon color="#6b2de6" />
                                        </div>
                                    </div>
                                ))
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}