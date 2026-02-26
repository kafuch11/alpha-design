import './app.css'

const Background = () => {
  return (
    <div className=' overflow-hidden h-full w-full top-0 left-0 bottom-0 right-0 fixed -z-40 pointer-events-none'>
        <div className=" background-grad-blue -top-10 -left-60"></div>
           <div className=" background-grad-blue -top-60 -right-60"></div>
           <div className=" background-grad-blue -bottom-60 -left-70"></div>
            
    </div>
  )
}

export default Background;
