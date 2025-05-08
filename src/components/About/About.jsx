/* eslint-disable react/prop-types */
import './About.css'
import NameImage from './NameImage/NameImage'
import LanguagesSection from './LanguagesSection/LanguagesSection'


export default function About({ language }) {
    return (
        <div className="relative font-montserrat h-full w-full flex flex-col text-white">
            <NameImage language={language} />

            <LanguagesSection />
        </div>
    )
}