/* eslint-disable react/prop-types */
import ImageTitle from "./ImageTitle/ImageTitle"
import ShortParagraphs from "./ShortParagraphs/ShortParagraphs"

export default function Home({ language }) {
    return (
        <div
            className="relative w-full h-full text-white
            p-10 max-lg:p-5"
        >
            <div
                className="h-full w-full flex flex-col
                lg:justify-center"
            >
                {/* First Section Image */}
                <ImageTitle />

                {/* Second Section Important Data */}
                <ShortParagraphs language={language} />
            </div>
        </div>
    )
}