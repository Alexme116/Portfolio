/* eslint-disable react/prop-types */
import ProjectFormat from "./ProjectFormat/ProjectFormat"


export default function Projects({ language }) {
    return (
        <div
            className="relative font-montserrat w-full flex flex-col text-white
                gap-2"
        >
            {/* Jalco Prices */}
            <div className="p-10 max-lg:p-5">
                <ProjectFormat
                    language={language}
                    enTitle={"Jalco Prices"}
                    esTitle={"Precios Jalco"}
                    techStack={["React", "Tailwind", "Node.js", "Express", "MongoDB", "Firebase"]}
                    enDescription={"A web application that allows users to view the prices of products from a company called Jalco in an intuitive, easy, and efficient way. The application is divided into two interfaces: one for employees and another for administrators. Administrators have access to the full product list with complete details, can add products, manage employees, and handle chats. Employees have access to the product list with limited details and to the chats."}
                    esDescription={"Una aplicación web que permite consultar los precios de los productos de una empresa llamada Jalco de manera intuitiva, fácil y eficiente. Esta aplicación está dividida en dos interfaces: una para el empleado y otra para el administrador. Los administradores tienen acceso a la lista de productos con detalles completos, pueden agregar productos, administrar empleados y gestionar chats. Los empleados tienen acceso a la lista de productos con detalles limitados y a los chats."}
                    videoId={"videoId"}
                />
            </div>
        </div>
    )
}