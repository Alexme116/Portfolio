import SoftwareDevImage from '../../../assets/Image/SoftwareDevImage.png';


export default function FirstSectionImage() {
    return (
        <div className='relative w-full'>
            {/* Text & Image Section */}
            <div className='font-montserrat w-full flex flex-col justify-between
                h-[50rem] max-2xl:h-[42rem] max-xl:h-[40rem] max-lg:h-[35rem] max-md:h-[28rem] max-sm:h-[16.9rem]'
            >
                {/* Text */}
                <h1
                    className="z-30 font-bold text-start
                    text-[10rem] max-2xl:text-[8rem] max-xl:text-[6.5rem] max-lg:text-[5.2rem] max-md:text-[4rem] max-sm:text-[2.5rem]
                    tracking-[-30px] max-2xl:tracking-[-20px] max-xl:tracking-[-18px] max-lg:tracking-[-13px] max-md:tracking-[-10px] max-sm:tracking-[-4px]"
                >
                    SOFTWARE
                </h1>
                <h1
                    className="z-30 font-bold text-end
                    pr-[32px] max-2xl:pr-[20px] max-xl:pr-[18px] max-lg:pr-[10px] max-md:pr-[9px] max-sm:pr-[5px]
                    text-[10rem] max-2xl:text-[8rem] max-xl:text-[6.5rem] max-lg:text-[5.2rem] max-md:text-[4rem] max-sm:text-[2.5rem]
                    tracking-[-30px] max-2xl:tracking-[-20px] max-xl:tracking-[-18px] max-lg:tracking-[-13px] max-md:tracking-[-10px] max-sm:tracking-[-4px]"
                >
                    DEVELOPER
                </h1>
            </div>

            {/* Image */}
            <div className='absolute z-20 top-0 left-0 w-full flex justify-center'>
                <div className="overflow-hidden flex justify-center items-center
                    w-[42.1rem] max-2xl:w-[35.7rem] max-xl:w-[34.88rem] max-lg:w-[30.9rem] max-md:w-[24.9rem] max-sm:w-[15rem]
                    mt-[4.05rem] max-2xl:mt-[3.18rem] max-xl:mt-[2.58rem] max-lg:mt-[2.1rem] max-md:mt-[1.5rem] max-sm:mt-[0.92rem]"
                >
                    <img
                    src={SoftwareDevImage}
                    alt="SoftDevImage"
                    className="h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}