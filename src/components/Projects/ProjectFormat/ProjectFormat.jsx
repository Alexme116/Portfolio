/* eslint-disable react/prop-types */
import { useInView } from 'react-intersection-observer'


export default function ProjectFormat({ language, enTitle, esTitle, techStack, enDescription, esDescription, videoId }) {
    const { ref, inView } = useInView({
        triggerOnce: false
    });

    return (
        <div ref={ref} className="overflow-hidden flex flex-col">
            {/* Title */}
            <h1
                className={`font-bold
                    text-[48px] max-md:text-[40px]
                    ${inView ? 'animate__animated animate__fadeInLeft' : 'opacity-0'}`}
            >
                {language == "EN"
                    ? <h1>{enTitle}</h1>
                    : <h1>{esTitle}</h1>}
            </h1>

            <div
                className={`md:ml-5 flex flex-col gap-5
                    mt-3 max-lg:mt-2 max-md:mt-1
                    ${inView ? 'opacity-0 animate-fadeInDelayed' : 'opacity-0'}`}
            >
                {/* Tech Stack */}
                <div className="flex flex-col gap-1">
                    <h1 className="text-xs text-[#a7a7a7]">
                        {language == "EN"
                            ? "- Tech Stack"
                            : "- Tecnologías empleadas"}
                    </h1>

                    <h1 className="ml-[9px] max-md:ml-2 text-sm max-md:text-xs">
                        {techStack.map((tech, index) => (
                            <span key={index}>
                                {tech}
                                {index < techStack.length - 1 && " | "}
                            </span>
                        ))}
                    </h1>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1">
                    <h1 className="text-xs text-[#a7a7a7]">
                        {language == "EN"
                            ? "- Description"
                            : "- Descripción"}
                    </h1>

                    <h1 className="ml-[9px] max-md:ml-2 text-sm max-md:text-xs">
                        {language == "EN"
                            ? <h1>{enDescription}</h1>
                            : <h1>{esDescription}</h1>
                        }
                    </h1>
                </div>
            </div>

            {/* Video */}
            <div className='w-full flex justify-center'>
                <div
                    className={`w-[60%] max-xl:w-[70%] max-lg:w-full mt-10 max-lg:mt-5 aspect-video
                        ${inView ? 'animate__animated animate__zoomInDown' : 'opacity-0'}`}
                >
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}