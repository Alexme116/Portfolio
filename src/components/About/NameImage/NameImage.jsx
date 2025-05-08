import { GithubIcon, LinkedinIcon } from "../../Icons/Icons"


export default function NameImage() {
    return (
        <div
            className="w-full nameImage flex justify-center gap-4 bg-[#170a2b]
                p-10 max-lg:p-5 pb-0
                max-lg:flex-col max-lg:items-center"
        >
            {/* Name & Image */}
            <div
                className="relative h-full
                    w-[29rem] max-md:w-[26rem] max-sm:w-[20rem]"
            >
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <h1
                            className="mt-28 font-bold leading-[47px]
                                text-[48px] max-md:text-[40px]"
                        >
                            Alex<br /> Moncada.
                        </h1>
                        <div className="mt-6 w-14 h-2 bg-[#6b2de6]" />
                    </div>

                    <div className="w-full mt-24 flex items-center gap-3">
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
                className="h-full w-[20rem] flex items-center
                    max-lg:mt-20 max-md:mt-16
                    max-lg:mb-20 max-md:mb-16"
            >
                <div className="flex flex-col">
                    <h1 className="text-sm text-[#a7a7a7]">- Introduction</h1>
                    <h1 className="mt-3 font-bold">
                        Software Developer, based in México
                    </h1>
                    <h1 className="mt-5 text-xs text-[#a7a7a7]">
                        I am a passionate software developer with a strong interest in creating innovative solutions and improving user experiences. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies and methodologies.
                    </h1>
                </div>
            </div>
        </div>
    )
}