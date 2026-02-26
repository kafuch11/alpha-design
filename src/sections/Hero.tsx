import './sections.css'


const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div id='home' className="w-full h-[calc(100vh-14rem)] min-h-[600px]  max-h-[700px] flex items-center justify-center -mt-20">
            <div className='w-full max-w-[800px] mx-auto mt-32 text-center space-y-8'>

                <h1 className='hero-pieces text-6xl font-bold text-blue-500'>
                    Welcome to my portfolio
                </h1>

                <h3 className='hero-pieces text-2xl text-gray-500 max-w-[700px] mx-auto'>
                    I'm <span className='text-blue-500 font-semibold'>Kafeel Ahmed</span>, physics student &amp; self-taught
                    web developer building clean, responsive interfaces.
                </h3>

                {/* <p className='hero-tagline text-gray-400 max-w-[600px] mx-auto'>
                    Bridging scientific rigor with modern web design to craft
                    solutions that look good and perform even better.
                </p> */}

                <div className='hero-buttons flex flex-wrap gap-4 justify-center'>
                    <button
                        onClick={scrollToContact}
                        className='primary-btn font-semibold text-lg py-2 px-6'
                    >
                        Contact Me
                    </button>
                    <a
                        href='/resuma'
                        className='secondary-btn font-semibold text-lg py-2 px-6'
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    )
    
}

export default Hero;
