
const Contact = () => {
  return (
    <div id="contact" className="section-cont">
      <div className="section-card flex flex-col items-center">
        <h2 className="text-blue-500 max-w-[600px] w-full">

          Lets work togather..
        </h2>
        <div className="grid grid-cols-12 pt-10 max-w-[700px] w-full">
          <div className=" col-span-4 min-h-10 h-max flex flex-col items-center">
            <h3 className="text-green-500">

              Mobile
            </h3>
            <p>+923488480058</p>
          </div>
          <div className=" col-span-4 min-h-10 h-max flex flex-col items-center">
            <h3 className="text-green-500">

              E-mail
            </h3>
            <p>iamkafeelahmedch@gmail.com</p>
          </div>
          <div className=" col-span-4 min-h-10 h-max flex flex-col items-center">
            <h3 className="text-green-500">

              Whatsapp
            </h3>
            <p>+923488480058</p>
          </div>
          {/* <div className=" col-span-12 min-h-10 h-max flex flex-col items-center">
            <h3 className="text-green-500 mt-4">
              My Resume
            </h3>
          </div> */}

        </div>
        <div className=" pt-10 max-w-[700px] w-full ">
          <textarea name="message" id="message" className="w-full border border-gray-900 rounded-sm py-3 px-4 min-h-52 overflow-hidden" placeholder="Leave a Message.."></textarea>
          <input name="email" type="email" id="email" className="w-full border border-gray-900 rounded-sm py-3 px-4 mt-3" placeholder="Emial.."></input>
          <div className="h-max w-full flex justify-end pb-5  gap-4 mt-3">
            <button className="button-black">Clear</button><button className="button-blue">Submit</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact