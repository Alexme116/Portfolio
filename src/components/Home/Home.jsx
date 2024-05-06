import { useNavigate } from 'react-router-dom'; 

const Home = () => {
    const navigate = useNavigate()

    const goDashboard = () => {
        navigate("/dashboard")
    }

    return (
        <>
        {/* --------- Main --------- */}
            <div className='h-svh bg-[#474747] text-white flex justify-center items-center'>
            {/* Seccion de cambio */}
            <button onClick={goDashboard} className='bg-black px-5 py-2 rounded-full'>
                Cambiar a Dashboard
            </button>
            </div>
        </>
    )
}

export default Home