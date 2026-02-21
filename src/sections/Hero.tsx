import './sections.css'


const Hero = () => {
    return (
        <div id='home' className=" w-full min-h-[calc(100vh-4rem)] relative z-10 overflow-hidden grid grid-rows-6 grid-cols-2 p-5 ">
            <h1 className='hero-pieces text-6xl  row-start-2 text-blue-500'>
                Hey There!
            </h1>
            <h2 className='hero-pieces text-4xl  row-start-3 text-gray-400'>Welcome to my portfolio!</h2>
           <h3 className='hero-pieces text-2xl row-start-4 text-gray-500'>
            {"I'm Kafeel Ahmed a website developer converting imaginations to interface."}
           </h3>
           <button className='hero-pieces button text-xl row-start-5 cursor-pointer'>
            {"Let's work togather"}
           </button>
        </div>
    )
    
}

export default Hero;
