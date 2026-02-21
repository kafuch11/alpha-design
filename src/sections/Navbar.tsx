import { useState } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  
  const navigation = [{text:'Home',link:'/#home'},{ text: 'About', link: '#about' }, { text: 'Projects', link: '#projects' }, { text: 'Skills', link: '#skills' }, { text: 'Contact', link: '#contact' },]
  const [hideNav, setHideNav] = useState(true)

  return (
    <div className="w-full min-w-[98vw] h-16 backdrop-blur-sm flex justify-between items-center px-8 sticky top-0 z-20 mx-auto ">
      <div>
        <Link to="/" >
          <img src="/navbar/myphoto.jpg" alt="my photo" className="h-10 rounded-md" />
        </Link>
      </div>
      <div className="hidden gap-4 md:flex text-lg font-semibold">
        {navigation.map((e, i) => (
          <a key={i} href={`${e.link}`} className="hover:text-horline">{`${e.text}`}</a>
        ))}
      </div>
      <div className="md:hidden flex">
        <img src="/navbar/menu.svg" alt="more" onClick={() => setHideNav(!hideNav)} className="h-8 cursor-pointer" />
        <div className="absolute z-10 right-0 top-16 h-[calc(100vh-4rem)] w-48 overflow-x-hidden pointer-events-none">

          <div onClick={() => setHideNav(true)} className={` ${hideNav ? 'translate-x-[100%]' : 'translate-x-[0%]'}  transition-transform duration-300  bg-[#000000dd] shadow-lg  p-4 flex flex-col gap-4 text-lg font-semibold h-full overflow-y-auto w-full rounded-l-md pointer-events-auto`}>
            {navigation.map((e, i) => (<a key={i} href={`${e.link}`} onClick={() => setHideNav(true)} className="hover:text-horline">{e.text}</a>))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar;


