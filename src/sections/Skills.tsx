import SkillCard from "../components/cards/SkillCard"
import { skills } from "../data/data"

const Skills = () => {

  return (
    <div id="skills" className="section-cont flex items-center justify-center">
      <div className="section-card flex flex-col items-center max-w-[900px] overflow-hidden mx-auto border-x-2 ">

        <div className=" flex  justify-center gap-4 ">
          {skills.map((skill) => (
            <SkillCard key={skill} text={skill} />
          ))}
            
        </div>
        <div className=" flex  justify-center gap-4 ">
          {skills.map((skill) => (
            <SkillCard key={skill} text={skill} />
          ))}
            
        </div>
        <div className=" flex  justify-center gap-4 ">
          {skills.map((skill) => (
            <SkillCard key={skill} text={skill} />
          ))}
          </div>
        <div className=" flex  justify-center gap-4 ">
          {skills.map((skill) => (
            <SkillCard key={skill} text={skill} />
          ))}
          </div>
            
        </div>
    </div>
  )
}

export default Skills;