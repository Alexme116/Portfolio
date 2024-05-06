import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate()

    const goHome = () => {
        navigate("/")
    }

    return (
    <>
    {/* --------- Main --------- */}
        <div className='h-svh bg-[#474747] text-white flex justify-center items-center'>
        {/* Seccion de cambio */}
        <button onClick={goHome} className='bg-black px-5 py-2 rounded-full'>
            Cambiar a Home
        </button>
        </div>
    </>
    )
}

export default Dashboard
