/* eslint-disable react/prop-types */
import FirstSectionImage from "./FirstSectionImage/FirstSectionImage"
import SecondSectionImportantData from "./SecondSectionImportantData/SecondSectionImportantData"

export default function Home({ language }) {
    return (
        <div
            className="h-full w-full flex flex-col
            lg:justify-center"
        >
            {/* First Section Image */}
            <FirstSectionImage />

            {/* Second Section Important Data */}
            <SecondSectionImportantData language={language} />
        </div>
    )
}