import './sections.css'


const Hero = () => {
    return (
        <div id='home' className=" w-full h-[calc(100vh-4rem)] max-h-[700px]  ">
            <div className='w-full max-w-[800px] mx-auto mt-32 text-center'>

            <h1 className='hero-pieces text-6xl font-bold row-start-2 text-blue-500'>
                Welcome to my portfolio!
            </h1>
            {/* <h2 className='hero-pieces text-4xl  row-start-3 text-gray-400'>Welcome to my portfolio!</h2> */}
           <h3 className='hero-pieces text-2xl  text-gray-500 max-w-[700px] mx-auto row-start-4'>
            {"I'm Kafeel Ahmed a website developer converting imaginations to interface."}
           </h3>
           <div className='w-full max-w-[400px] mx-auto flex justify-around'>

           {/* <button className='hero-pieces secondary-btn'>
            About
           </button> */}
           <button className='hero-pieces primary-btn font-semibold text-xl flex'>
            <span className='h-full w-10 block'></span> {'<'}Contact{'/>'}  <span className='h-full w-10 block'></span>
           </button>
           </div>
            </div>
        </div>
    )
    
}

export default Hero;
