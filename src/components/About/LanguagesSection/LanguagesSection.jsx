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


export default function LanguagesSection() {
    return (
        <div className="w-full flex flex-col">
            <div className="w-[50rem]">
                <div
                    className="flex flex-col
                        p-10 max-lg:p-5 pb-0"
                >
                    {/* Label */}
                    <h1 className="text-sm text-[#a7a7a7]">
                        - Languages & Frameworks
                    </h1>

                    {/* Title */}
                    <h1 className="mt-3 font-bold">
                        Some of the languages and frameworks I have worked with
                    </h1>
                </div>
            </div>

            {/* Languages Carousel */}
            <div className="w-full overflow-hidden whitespace-nowrap mt-10 bg-[#ffffff05] py-10 relative group">
                <div className="marquee group-hover:[animation-play-state:paused] inline-block whitespace-nowrap">
                    {[...Array(2)].map((_, idx) => (
                        <div key={idx} className="inline-block">
                            {[...Array(2)].map(() => (
                                icons.map((Icon, i) => (
                                    <div
                                        key={i}
                                        className="inline-block mx-10 text-white hover:scale-110 transition-transform duration-300"
                                    >
                                        <Icon color="#6b2de6" w="64px" h="64px" />
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