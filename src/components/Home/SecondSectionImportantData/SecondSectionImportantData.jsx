

export default function SecondSectionImportantData() {
    return (
        <div className="max-lg:flex-1 max-lg:flex max-lg:flex-col max-lg:justify-around">
            <div className="lg:absolute left-12 top-[32rem]">
                <h1
                    className="font-bold lg:hidden
                    text-[14px] max-lg:text-[18px] max-sm:text-[12px]"
                >
                    WHAT I DO
                </h1>

                <h1
                    className="font-extralight
                    w-96 max-2xl:w-72 max-xl:w-44 max-lg:w-[45%]
                    max-xl:text-[12px] max-lg:text-[16px] max-sm:text-[10px]"
                >
                    AS A SOFTWARE DEVELOPER I CRAFT CODE THAT POWERS SEAMLESS AND SCALABLE DIGITAL SOLUTIONS.
                </h1>
            </div>

            <div className="lg:absolute lg:right-10 top-[20rem] flex flex-col items-end">
                <h1
                    className="font-bold lg:hidden
                    text-[14px] max-lg:text-[18px] max-sm:text-[12px]"
                >
                    MY PHILOSOPHY
                </h1>

                <h1
                    className="font-extralight text-end
                    w-96 max-2xl:w-72 max-xl:w-44 max-lg:w-[45%]
                    max-xl:text-[12px] max-lg:text-[16px] max-sm:text-[10px]"
                >
                    I BUILD EFFICIENT, RELIABLE, AND USER-FOCUSED APPLICATIONS THAT MAKE A DIFFERENCE.
                </h1>
            </div>
        </div>
    )
}