
const SkillCard = () => {
  return (
    <div className="skills-card">
      <div className=" h-36 aspect-square border-8 border-green-500 rounded-full flex flex-col gap-0 justify-center items-center">
        <div className="text-3xl font-bold text-green-600">98%</div>
      </div>
      <div className="text-lg line-1 text-green-600 ">Expert</div>
        <div className="flex gap-1 items-center">
          <div className="h-5 aspect-square rounded-full border border-gray-700"></div>
          <div className="text-xl text-gray-600">Reactjs</div>
        </div>
    </div>
  )
}

export default SkillCard;

