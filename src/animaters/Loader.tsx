import './Animaters.css'


const Loader = () => {
    return (
        <div className='relative h-screen w-screen flex justify-center place-items-center items-center'>
            <div className='relative  w-[9rem] h-[9rem]'>

            <div className='w-20 bg-green-500 absolute rotate-[60deg] loader loader-c1'></div>
            <div className='w-20 bg-red-500 absolute rotate-[120deg] loader loader-ac'></div>
            <div className='w-20 bg-blue-500 absolute loader loader-c2'></div>
            </div>
        </div>
    )
}

export default Loader