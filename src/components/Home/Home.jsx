import SoftwareDevImage from '../../assets/Image/SoftwareDevImage.png';

export default function Home() {
    return (
        <div className="relative w-full h-full text-white">
            <div className='relative w-full h-full flex'>
                {/* Text & Image Section */}
                <div className='font-montserrat w-full flex flex-col justify-between
                    h-full max-2xl:h-[90%] max-xl:h-[80%] max-lg:h-[70%] max-md:h-[60%] max-sm:h-[45%]'
                >
                    {/* Text */}
                    <h1
                        className="z-30 font-bold text-start
                        text-[10rem] max-2xl:text-[9rem] max-xl:text-[8rem] max-lg:text-[7rem] max-md:text-[5rem] max-sm:text-[3rem]
                        tracking-[-30px] max-2xl:tracking-[-20px] max-xl:tracking-[-18px] max-lg:tracking-[-13px] max-md:tracking-[-10px] max-sm:tracking-[-4px]"
                    >
                        SOFTWARE
                    </h1>
                    <h1
                        className="z-30 font-bold text-end
                        pr-[32px] max-2xl:pr-[20px] max-xl:pr-[18px] max-lg:pr-[14px] max-md:pr-[11px] max-sm:pr-[5px]
                        text-[10rem] max-2xl:text-[9rem] max-xl:text-[8rem] max-lg:text-[7rem] max-md:text-[5rem] max-sm:text-[3rem]
                        tracking-[-30px] max-2xl:tracking-[-20px] max-xl:tracking-[-18px] max-lg:tracking-[-13px] max-md:tracking-[-10px] max-sm:tracking-[-4px]"
                    >
                        DEVELOPER
                    </h1>
                </div>

                {/* Image */}
                <div className='absolute z-20 top-0 left-0 w-full flex justify-center h-full'>
                    <div className="overflow-hidden flex justify-center items-center
                        w-[40%] max-2xl:w-[50%] max-xl:w-[55%] max-lg:w-[60%] max-md:w-[65%] max-sm:w-[70%]
                        h-full max-2xl:h-[90%] max-xl:h-[80%] max-lg:h-[70%] max-md:h-[60%] max-sm:h-[45%]
                        py-[66px] max-2xl:py-[57px] max-xl:py-[51px] max-lg:py-[44px] max-md:py-[31px] max-sm:py-[18px]"
                    >
                        <img
                        src={SoftwareDevImage}
                        alt="SoftDevImage"
                        className="h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}