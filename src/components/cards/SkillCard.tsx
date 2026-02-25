

const SkillCard = ({text}:{text:string}) => {
  return (
    <div className="skills-card">
      <div className="w-8 h-8 rounded-full border-2 border-r-gray-500">

      </div>
      <div className="text-lg font-bold">{text}</div>
    </div>
  )
}

export default SkillCard;
